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

router.post("/addBook", authenticateAdmin, (req, res) => {
    
    //TODO: connect it to cloudinary and upload images
    const newBook = new Book({
        brefTitle: req.body.brefTitle,
        title: req.body.title,
        author: req.body.author,
        genres: req.body.genres,
        published: req.body.published,
        monthRec: req.body.monthRec,
        description: req.body.description
    })

    newBook.save().then((result) => {
        res.send(result)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

router.delete("/deleteBook", authenticateAdmin, (req, res) => {
    //TODO: when deleting books, also deletes all relevant comments and reviews
    const id = req.body.bookId;

    if (!ObjectID.isValid(id)){
        res.status(400).send()
        return;
    }

    Book.findByIdAndDelete(id).then(book => {
        if (!book){
            res.status(404).send()
        }else {
            res.send(book)
        }
    }).catch(error => {
        console.log(error)
        res.status(400).send()
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

module.exports = router;