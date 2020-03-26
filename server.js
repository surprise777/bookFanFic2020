"use strict";
const log = console.log;
const express = require("express");
// starting the express server
const app = express();

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set('useFindAndModify', false);

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));

/*** Session handling **************************************/
// Create a session cookie
app.use(
    session({
        secret: "oursecret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000,
            httpOnly: true
        }
    })
);

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

// import the mongoose models
const {User} = require("./models/user");
const {Review} = require("./models/review");
const {Comment} = require("./models/comment");
const {Book} = require("./models/book");

// import the router
const user = require("./routes/user");
const comment = require("./routes/comment");
const review = require("./routes/review");
const book = require("./routes/book");

// Link the router (This is the api routes)
app.use("/user", user)
app.use("/comment", comment)
app.use("/review", review)
app.use("/book", book)

// Serve the build
app.use(express.static(__dirname + "/client/build"));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
    log(`Listening on port ${port}...`);
});