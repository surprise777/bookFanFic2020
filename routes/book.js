'use strict';

const { Book } = require("../models/book");
const { Review } = require("../models/review");
const { Comment } = require("../models/comment");
const express = require("express");
const { ObjectID } = require("mongodb");
const router = express.Router();

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

// cloudinary: configure using credentials found on your Cloudinary Dashboard
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'project309',
    api_key: '566185589847321',
    api_secret: 'IEQi9LiO3jdJ2LuiYonVvbHKbEM'
});

// Authenticate the admin is logged in and doing the operation
const authenticateAdmin = (req, res, next) => {
    if (req.session.user && req.session.acctType === "a"){
        next();
    }else{
        res.status(401).send("unauthorized");
    }
}

router.post("/addBook", authenticateAdmin, multipartMiddleware, (req, res) => {
    
    cloudinary.uploader.upload(
        req.files.image.path, // req.files contains uploaded files
        function (result) {
            const newBook = new Book({
                brefTitle: req.body.brefTitle,
                title: req.body.title,
                author: req.body.author,
                genres: req.body.genres,
                published: req.body.published,
                monthRec: req.body.monthRec,
                description: req.body.description,
                cover_id: result.public_id,
                cover_url: result.url
            })
            newBook.save().then((book) => {
                res.send(book)
            }).catch(error => {
                console.log(error)
                //destroy the cover image
                cloudinary.uploader.destroy(result.public_id, function (result) {});
                res.status(400).send()
            })
        });
})

//when deleting books, also deletes all relevant comments and reviews
router.delete("/deleteBook", authenticateAdmin, (req, res) => {
    const id = req.body.bookId;

    if (!ObjectID.isValid(id)){
        res.status(400).send()
        return;
    }

    Comment.deleteMany({bookId: id}, function(err){})
    Review.deleteMany({bookId: id}, function(err){})

    Book.findByIdAndDelete(id).then(book => {
        if (!book){
            res.status(404).send()
        }else {
            cloudinary.uploader.destroy(book.cover_id, function (result) {});
            res.send(book)
        }
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

//get all books
router.get("/all", (req, res) => {
    
    Book.find().then(books => {
        res.send(books)
    }).catch(error => {
        console.log(error)
        res.status(500).send()
    })
})

//search the books by its id
router.get("/searchById/:id", (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)){
        res.status(400).send();
        return;
    }

    Book.findById(id).then(book => {
        if (!book){
            res.status(404).send("The book does not exist")
        }else{
            res.send(book)
        }
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

//search by the book title
router.get("/searchByName/:title", (req, res) => {
    const bookTitle = req.params.title;

    Book.find({title: {$regex: bookTitle, $options:'i'}}).then(books => {
        res.send(books)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })

})

//search by the tags
//The input should be formatted as genre1&genre2&genre3 if want to find using multiple genres
router.get("/searchByGenres/:genres", (req, res) => {
    // All genres we want to search
    const genres = req.params.genres.split("&");

    Book.find({genres: {$in: genres}}).then(books =>{
        res.send(books)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })

})

//search the relevant books given bookId
router.get("/relevant/:bookId", (req, res) => {
    const bookId = req.params.bookId;
    if (!ObjectID.isValid(bookId)){
        res.status(400).send()
        return
    }

    Book.findById(bookId).then(book =>{
        if(!book){
            res.status(404).send()
        }else{
            const genres = book.genres;
            return Book.find({_id: {$ne: bookId}, genres: {$in: genres}}).limit(5)
        }
    }).then(books => {
        res.send(books)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

//Retrieve trendings, trendings are dependent on total rating, only show 10
router.get("/trending", (req, res) => {
    
    Book.find().sort({ratings: -1}).limit(10).then(books => {
        res.send(books)
    }).catch(error => {
        console.log(error)
        res.status(500).send()
    })

})

//Retrieve monthly recommendation books
router.get("/monthRecommendation", (req, res) => {
    Book.find({monthRec: true}).then(books => {
        res.send(books)
    }).catch(error => {
        console.log(error)
        res.status(500).send()
    })
})

// Admin can make a book become monthly recommendation, or remove it from monthly recommendation
router.patch("/makeRec/", authenticateAdmin, (req, res) => {
    const bookId = req.body.bookId;
    const status = req.body.status; // status can be either true or false

    if (typeof status !== "boolean"){
        res.status(400).send()
        return
    }

    if (!ObjectID.isValid(bookId)){
        res.status(400).send()
        return
    }

    Book.findById(bookId).then(book => {
        if (!book){
            res.status(404).send()
        }else{
            book.monthRec = status;
            book.save()
            res.send()
        }
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})


module.exports = router;