'use strict';

const { Comment } = require("../models/comment");
const { Book } = require("../models/book");
const { User } = require("../models/user");
const express = require("express");
const { ObjectID } = require("mongodb");
const router = express.Router();

const check_login = (req, res, next) => {
    if (!req.session.user){
        res.status(401).send("unauthorized");
    }else{
        next();
    }
}

// Add comment to a book specified by book Id, The request body
// Should include userId, bookId, text and rating
router.post("/addComment", check_login, (req, res) => {
    
    const userId = req.body.userId;
    const bookId = req.body.bookId;
    if (!ObjectID.isValid(userId) || !ObjectID.isValid(bookId)){
        res.status(404).send();
        return
    }

    // Check if the user and book exists
    Book.findById(bookId).then(result => {
        if (!result){
            res.status(404).send("The book does not exist.");
            return
        }else{
            User.findById(userId).then(user => {
                if (!user){
                    res.status(404).send("The user does not exist.")
                }else{
                    const newComment = new Comment({
                        userId: userId,
                        bookId: bookId,
                        userName: user.userName,
                        rating: req.body.rating,
                        content: req.body.content,
                        date: new Date()
                    })
                    newComment.save().then(comment => {
                        res.send(comment);
                    }).catch(error => {
                        console.log(error)
                        res.status(400).send()
                    })
                }
            }).catch(error => {
                console.log(error)
                res.status(400).send()
            })
        }
    }).catch(error =>{
        console.log(error);
        res.status(400).send();
    })    
})


// Delete the comment, either admin or user itself can delete it
router.delete("/removeComment/:id", check_login, (req, res) => {
    const commentId = req.params.id;
    const userId = req.session.user;
    const isAdmin = req.session.acctType === "a" ? true : false;
    if (!ObjectID.isValid(commentId) || !ObjectID.isValid(userId)){
        res.status(400).send();
        return
    }

    Comment.findById(commentId).then(comment => {
        if (!comment){
            res.status(404).send()
        }else{
            const commentUser = comment.userId;
            if (!commentUser.equals(userId) && !isAdmin){
                res.status(401).send("unauthorized operation");
            }else{
                return Comment.findByIdAndDelete(commentId)
            }
        }
    }).then(result => {
        res.send(result)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

// get all comments of a book by book Id
router.get("/byBook/:id", (req, res) => {
    const bookId = req.params.id;

    if (!ObjectID.isValid(bookId)) {
        res.status(400).send()
        return
    }

    // Already checked when adding comments that book exists, no need to check again
    Comment.find({bookId: bookId}).then(comments => {
        res.send(comments)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

// get all comments posted by a particular user
router.get("/byUser/:id", (req, res) => {
    const userId = req.params.id;

    if (!ObjectID.isValid(userId)) {
        res.status(400).send()
        return
    }

    // Already checked when adding comments that user exists, no need to check again
    Comment.find({userId: userId}).then(comments => {
        res.send(comments)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})


module.exports = router;