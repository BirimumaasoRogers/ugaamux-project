"use strict";

var mongoose = require('mongoose');

var passport = require('passport-local-mongoose');

var perfLoginSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    required: true
  },
  stagename: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  dob: {
    type: Date,
    trim: true
  },
  gender: {
    type: String,
    trim: true
  },
  members: {
    type: Number
  },
  file: {
    type: String
  },
  date: {
    type: Date,
    trim: true,
    required: true
  },
  phoneno: {
    type: Number,
    trim: true,
    required: true
  },
  location: {
    type: String,
    trim: true,
    required: true
  }
});
perfLoginSchema.plugin(passport, {
  usernameField: "email"
});
module.exports = mongoose.model("Perf-Login", perfLoginSchema);