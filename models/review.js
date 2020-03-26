/* User model */
'use strict';

const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const ReviewSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        required: true
    },
    userName: {
        type: String,
        minlength: 0,
        required: true
    },
    bookId: {
        type: ObjectId,
        required: true
    },
    title: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        required: true
    },
    popularity: {
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
    contents: {
        type: [String],
        required: true
    }
})

const Review = mongoose.model("Review", ReviewSchema);

module.exports = {Review};