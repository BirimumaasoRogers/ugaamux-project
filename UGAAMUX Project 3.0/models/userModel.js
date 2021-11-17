const mongoose = require('mongoose');
const passport = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        unique: true
    },
    role: {
        type: String,
        trim: true,
    }
});
userSchema.plugin(passport, {
    usernameField: "email",
});
module.exports = mongoose.model("UsersData", userSchema)