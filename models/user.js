/* User model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "Invalid email"
        }
    },
    userName: {
        type: String,
        required: true,
        minlength: 1
    },
    password: {
        type: String,
        required: true
    },
    acctType: {
        type: String,
        maxlength: 1,
        required: true
    },
    icon_id: { // Default will be empty string
        type: String,
        required: true,
        default: ""
    },
    icon_url: { // Default will be empty string
        type: String,
        required: true,
        default: ""
    },
    signature: {
        type: String,
        required: true,
        default: "This guy is lazy, he haven't write anything yet."
    }
})


UserSchema.pre('save', function(next){
    const user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next()
            })
        })
    }else {
        next();
    }
})

// Allow top find user document by comparing the hashed password to a given one

UserSchema.statics.findByEmailPassword = function(email, password) {
    const User = this;

    return User.findOne({email: email}).then((user) => {
        if (!user) {
            return Promise.reject()
        }
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    resolve(user)
                }else {
                    reject()
                }
            })
        })
    })
}


const User = mongoose.model('User', UserSchema)
module.exports = {User}