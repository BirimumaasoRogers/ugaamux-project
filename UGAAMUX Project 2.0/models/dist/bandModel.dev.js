"use strict";

var mongoose = require('mongoose');

var bandLoginSchema = new mongoose.Schema({
  bandname: {
    type: String,
    trim: true
  },
  useremail: {
    type: String,
    trim: true,
    unique: true
  },
  passid: {
    type: String,
    trim: true
  },
  launch: {
    type: Date
  },
  members: {
    type: Number
  }
});
module.exports = mongoose.model("Band-Login", bandLoginSchema, "band-login");