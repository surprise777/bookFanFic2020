'use strict';

const { User } = require("../models/user");
const express = require("express");
const { ObjectID } = require("mongodb");
const router = express.Router();

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


const check_login = (req, res, next) => {
    if (!req.session.user){
        res.status(401).send("unauthorized");
    }else{
        next();
    }
}

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

router.get("/byName/:name", (req, res) => {
    const name = req.params.name;
    
    User.find({userName: {$regex: name, $options: 'i'}}).then(users =>{
        res.send(users)
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

//update user signature
router.patch("/updateSignature", check_login, (req, res) => {
    const newSigna = req.body.signature;
    const id = req.session.user;

    User.findById(id).then(user => {
        if (!user){
            res.status(404).send()
        }else{
            user.signature = newSigna
            return user.save()
        }
    }).then(result => {
        if (result){
            res.send({signature: result.signature})
        }else{
            res.status(500).send()
        }
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

//update username
router.patch("/updateUserName", check_login, (req, res) => {
    const newUserName = req.body.userName;
    const id = req.session.user;

    User.findById(id).then(user => {
        if (!user){
            res.status(404).send()
        }else{
            user.userName = newUserName
            return user.save()
        }
    }).then(result => {
        if (result){
            res.send({userName: result.userName})
        }else{
            res.status(500).send()
        }
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

//update password, this one is a little special, put user id into request body as well
//Admin can also change the password of any user
router.patch("/updatePassword", check_login, (req, res) => {
    const isAdmin = req.session.acctType;
    const id = req.body.id;
    const password = req.body.password;

    if (!ObjectID.isValid(id)){
        res.status(400).send()
        return
    }

    User.findById(id).then(user => {
        if (!user){
            res.status(404).send()
        }else{
            if (!isAdmin && !id.equals(req.session.user)){
                res.status(401).send("unauthorized")
            }else{
                user.password = password
                return user.save()
            }
        }
    }).then(result => {
        res.send()
    }).catch(error => {
        console.log(error)
        res.status(400).send()
    })
})

// allow user to update their icons, please name the name of the input field in the form "image"
// e.g. <input name="image" type="file" />, see the example posted for further helps
router.patch("/updateIcons", check_login, multipartMiddleware, (req, res) => {
    
    cloudinary.uploader.upload(
        req.files.image.path, // req.files contains uploaded files
        function (result) {

            User.findById(req.session.user).then(user => {
                // Destroy user's previous image icon
                if (user.icon_url !== "null"){
                    cloudinary.uploader.destroy(user.icon_id, function (result) {});
                }
                user.icon_id = result.public_id
                user.icon_url = result.url
                return user.save()
            }).then(result => {
                res.send(result)
            }).catch(error => {
                console.log(error)
                res.status(400).send()
            })

        });
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