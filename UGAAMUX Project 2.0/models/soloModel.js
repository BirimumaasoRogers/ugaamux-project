const mongoose = require('mongoose');

const soloLoginSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
    },
    stagename: {
        type: String,
        trim: true,
    },
    useremail: {
        type: String,
        trim: true,
        unique: true
    },
    passid: {
        type: String,
        trim: true,
    },
    cardno: {
        type: String,
        trim: true,
    },
    cardcvc: {
        type: String,
        trim: true,
    },
});
module.exports = mongoose.model("Solo-Login", soloLoginSchema, "solo-login")