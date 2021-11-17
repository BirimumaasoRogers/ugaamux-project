"use strict";

var mongoose = require('mongoose');

var signInSchema = new mongoose.Schema({
  artsitID: {
    type: String,
    trim: true,
    unique: true
  },
  useremail: {
    type: String,
    trim: true,
    unique: true
  },
  passid: {
    type: String,
    trim: true,
    unique: true
  }
});
module.exports = mongoose.model("Sign-In", signInSchema);