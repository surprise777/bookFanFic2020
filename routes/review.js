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
        res.status(401).next()
    }else{
        next()
    }
}

// Need to provide the book id
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

// Like/Unlike a review
router.patch("/like", check_login, (req, res) => {
    const userId = req.session.user;
    const reviewId = req.body.reviewId;

    if (!ObjectID.isValid(reviewId)){
        res.status(400).send()
        return
    }

    Review.findById(reviewId).then(review => {
        if (!review){
            res.status(404).send()
        }else{
            const liked = review.fanList.some(id => id.equals(userId))
            if (liked){
                review.fanList = review.fanList.filter(id => !id.equals(userId));
                review.popularity -= 1
            }else {
                review.fanList.push(userId)
                review.popularity +=1
            }
            return review.save()
        }
    }).then(result => {
        res.send(result)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

module.exports = router;