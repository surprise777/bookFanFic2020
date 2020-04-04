'use strict';

const { Review } = require("../models/review");
const { Book } = require("../models/book");
const { User } = require("../models/user");

const express = require("express");
const { ObjectID } = require("mongodb");
const router = express.Router();

// Middleware to check for authorization
const check_login = (req, res, next) => {
    if (!req.session.user){
        res.status(401).send()
    }else{
        next()
    }
}

// Need to provide the book id, need to provide bookId, title, rating, contents
router.post("/addReview", check_login, (req, res) => {
    const userId = req.session.user;

    const bookId = req.body.bookId;
    if (!ObjectID.isValid(bookId)){
        res.status(400).send()
        return
    }

    // Check if the book exists
    Book.findById(bookId).then(book => {
        if (!book){
            res.status(404).send("The book does not exist,")
        }else{
            const newReview = new Review({
                userId: userId,
                bookId: bookId,
                userName: req.session.userName,
                title: req.body.title,
                rating: req.body.rating,
                contents: req.body.contents
            })
        
            newReview.save().then(review => {
                res.send(review)
            }).catch(error => {
                console.log(error)
                res.status(400).send()
            })
        }
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

// Used to delete the review, only user itself or admin can remove the comment
router.delete("/removeReview/:id", check_login, (req, res) => {
    const reviewId = req.params.id;
    const userId = req.session.user;
    const isAdmin = req.session.acctType === "a" ? true : false;

    if (!ObjectID.isValid(reviewId)){
        res.status(400).send()
        return
    }

    Review.findById(reviewId).then(review => {
        if (!review){
            res.status(404).send()
        }else{
            const reviewAuthor = review.userId;
            if (!reviewAuthor.equals(userId) && !isAdmin){
                res.status(401).send("unauthorized oepration");
            }else{
                return Review.findByIdAndDelete(reviewId)
            }
        }
    }).then(result => {
        res.send(result)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

// Get all reviews
router.get("/all", (req, res) => {
    Review.find().then(reviews => {
        res.send(reviews)
    }).catch(error => {
        console.log(error)
        res.status(500).send()
    })
})

//Get reviews by it unique id
router.get("/byId/:id", (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)){
        res.status(404).send();
        return
    }

    Review.findById(id).then(review => {
        if (!review){
            res.status(404).send();
        }else{
            res.send(review);
        }
    }).catch(error => {
        console.log(error)
        res.status(404).send();
    })

})

// Search by the title
router.get("/searchByName/:title", (req, res) => {
    const title = req.params.title;

    Review.find({title: {$regex: title, $options: 'i'}}).then(reviews => {
        res.send(reviews)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })

})

// Search by user id
router.get("/byUser/:id", (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)){
        res.status(400).send()
        return
    }
    
    Review.find({userId: id}).then(reviews => {
        res.send(reviews)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

// get all reviews of a book by book Id
router.get("/byBook/:id", (req, res) => {
    const bookId = req.params.id;

    if (!ObjectID.isValid(bookId)) {
        res.status(400).send()
        return
    }

    // Already checked when adding reviews that book exists, no need to check again
    Review.find({bookId: bookId}).then(reviews => {
        res.send(reviews)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

// Load 5 reviews each time, sorted by time
router.get("/loadReviews/:id/:index", (req, res) => {
    const bookId = req.params.id;
    const offset = parseInt(req.params.index);
    if (!Number.isInteger(offset)){
        res.status(400).send()
        return
    }
    if (!ObjectID.isValid(bookId)){
        res.status(400).send()
        return
    }

    Review.find({bookId: bookId}).sort({date: -1}).skip(offset).limit(5).then(reviews => {
        res.send(reviews)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

//Get the top review of a book(i.e. most popularities)
router.get("/top/:id", (req, res) => {
    const bookId = req.params.id;

    if (!ObjectID.isValid(bookId)) {
        res.status(400).send()
        return
    }

    Review.find({bookId: bookId}).sort({popularity : -1}).limit(1).then(review => {
        res.send(review)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })

})

//Get the top review of a book(i.e. most popularities)
router.get("/mostPopular", (req, res) => {

    Review.find().sort({popularity : -1}).limit(5).then(reviews => {
        res.send(reviews)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })

})

// Like/Unlike a review
router.patch("/like", check_login, (req, res) => {
    const userId = req.session.user;
    const reviewId = req.body.reviewId;

    if (!ObjectID.isValid(reviewId)){
        res.status(400).send()
        return
    }
    let status = false;
    
    Review.findById(reviewId).then(review => {
        if (!review){
            res.status(404).send()
        }else{
            const liked = review.fanList.some(id => id.equals(userId))
            if (liked){
                review.fanList = review.fanList.filter(id => !id.equals(userId));
                review.popularity -= 1
                status = false
            }else {
                review.fanList.push(userId)
                review.popularity +=1
                status = true
            }
            return review.save()
        }
    }).then(result => {
        res.send({result, status: status})
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

module.exports = router;