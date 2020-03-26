'use strict';

const { User } = require("../models/user");
const express = require("express");
const { ObjectID } = require("mongodb");
const router = express.Router();

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
        res.status(400).send()
    })
})

router.get("/check-session", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true});
    }else{
        res.status(401).send();
    } 
})

module.exports = router;