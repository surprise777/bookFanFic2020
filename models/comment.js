/* Comment model */
'use strict';

const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const CommentSchema = {
    userId: {
        type: ObjectId,
        required: true
    },
    userName: {
        type: String,
        minlength: 1,
        required: true
    },
    bookId: {
        type: ObjectId,
        required: true
    },
    content: {
        type: String,
        minlength: 1,
        required: true
    },
    likes: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    rating: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = {Comment};
