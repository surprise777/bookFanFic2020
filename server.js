"use strict";
const log = console.log;
const express = require("express");
// starting the express server
const app = express();

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set('useFindAndModify', false);

// import the mongoose models
const {User} = require("./models/user");
const {Review} = require("./models/review");
const {Comment} = require("./models/comment");
const {Book} = require("./models/book");

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
            expires: 60000,
            httpOnly: true
        }
    })
);

// // A route to login and create a session
// app.post("/users/login", (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;

//     log(email, password);
//     // Use the static method on the User model to find a user
//     // by their email and password
//     User.findByEmailPassword(email, password)
//         .then(user => {
//             // Add the user's id to the session cookie.
//             // We can check later if this exists to ensure we are logged in.
//             req.session.user = user._id;
//             req.session.email = user.email;
//             res.send({ currentUser: user.email });
//         })
//         .catch(error => {
//             res.status(400).send()
//         });
// });

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