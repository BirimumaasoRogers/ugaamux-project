"use strict";

var mongoose = require('mongoose');

var passport = require('passport-local-mongoose');

var bandLoginSchema = new mongoose.Schema({
  bandname: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    unique: true
  },
  role: {
    type: String,
    trim: true
  },
  launch: {
    type: Date,
    required: true
  },
  members: {
    type: Number,
    required: true
  },
  file: {
    type: String
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
bandLoginSchema.plugin(passport, {
  usernameField: "email"
});
module.exports = mongoose.model("BandLogin", bandLoginSchema);