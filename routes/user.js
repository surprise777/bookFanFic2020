'use strict';

const { User } = require("../models/user");
const express = require("express");
const { ObjectID } = require("mongodb");
const router = express.Router();

// Sign up for an account
router.post("/signup", (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName
    });

    user.save().then((user)=>{
        res.send(user);
    }).catch(error =>{
        console.log(error)
        res.status(400).send();
    })
})

// Login and send cookies to the user
router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findByEmailPassword(email, password).then(user => {
        req.session.user = user._id;
        req.session.email = user.email;
        req.session.userName = user.userName;
        req.session.acctType = user.acctType;
        res.send({ currentUser: user });
    }).catch(error => {
        console.log(error);
        res.status(400).send("Wrong email or password")
    })
})

// Log out the current user
router.post("/logout", (req, res) => {
    req.session.destroy(error => {
        if (error){
            res.status(500).send()
        }else{
            res.send()
        }
    })
})

// Check if user is logged in by checking the cookies
router.get("/check-session", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true});
    }else{
        res.status(401).send();
    } 
})

// Get all users
router.get("/all", (req, res) => {
    User.find().then(users => {
        res.send({users})
    }).catch(error => {
        console.log(error)
        res.status(500).send()
    })
})

//Find the user id, will return userName, email, icon_id, icon_url and signature
router.get("/:id", (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)){
        res.status(400).send();
        return;
    }

    User.findById(id).then((user) => {
        if (!user){
            res.status(404).send()
        }else{
            res.send({
                email: user.email,
                userName: user.userName,
                icon_id: user.icon_id,
                icon_url: user.icon_url,
                signature: user.signature 
            })
        }
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

//Turn a user into Admin, this is suppose to be a hidden route
router.patch("/makeAdmin", (req, res) => {
    const userId = req.body.userId;
    if (!ObjectID.isValid(userId)){
        res.status(400).send();
        return;
    }

    User.findById(userId).then((user) => {
        if (!user){
            res.status(404).send(); // Can not find the user
        }
        user.acctType = "a";
        return user.save()
    }).then((result) => {
        res.send("successfully added as admin");
    }).catch(error => {
        console.log(error);
        res.status(400).send();
    })
})


module.exports = router;