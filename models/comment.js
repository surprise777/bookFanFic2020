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
        min: 0,
        required: true,
        default: 0
    },
    fanList: {
        type: [ObjectId],
        required: true,
        default: []
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = {Comment};
