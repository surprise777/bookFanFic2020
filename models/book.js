'use strict';

const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    brefTitle: {
        type: String,
        minlength: 1,
        required: true
    },
    title: {
        type: String,
        minlength: 1,
        required: true
    },
    author: {
        type: String,
        minlength: 1,
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    published: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        required: true,
        default: 0
    },
    numRating: {
        type: Number,
        min: 0,
        required: true,
        default: 0
    },
    monthRec: {
        type: Boolean,
        required: true,
        default: false
    },
    description: {
        type: String,
        minlength: 1,
        required: true
    },
    cover_id: {
        type: String,
        required: true,
        default: "null"
    },
    cover_url: { //Url to the resource in cloudinary file storage
        type: String,
        required: true,
        default: "null"
    }
})

const Book = mongoose.model("Book", BookSchema);

module.exports = {Book};