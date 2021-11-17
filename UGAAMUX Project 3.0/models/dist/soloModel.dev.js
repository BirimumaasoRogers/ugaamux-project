"use strict";

var mongoose = require('mongoose');

var passport = require('passport-local-mongoose');

var soloLoginSchema = new mongoose.Schema({
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
  role: {
    type: String,
    trim: true
  },
  dob: {
    type: Date,
    trim: true,
    required: true
  },
  gender: {
    type: String,
    trim: true,
    required: true
  },
  nin: {
    type: String,
    trim: true,
    required: true
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
soloLoginSchema.plugin(passport, {
  usernameField: "email"
});
module.exports = mongoose.model("SoloLogin", soloLoginSchema);