"use strict";

var express = require('express');

var mongoose = require('mongoose');

var passport = require('passport'); //!=== Model ===


var User = require("../models/userModel");

var SoloLogin = require("../models/soloModel");

var BandLogin = require("../models/bandModel");

var PerfLogin = require("../models/perfModel");

var router = express.Router(); //*==== Sign In ===

router.get("/sign-in", function (req, res) {
  res.render("sign-in");
});
router.post('/sign-in', passport.authenticate('local', {
  failureRedirect: '/reg/sign-in'
}), function (req, res) {
  req.session.user = req.user;
  User.findOne({
    email: req.body.email
  }) //*Checking through their roles and redirecting them to respective pages
  .then(function (data) {
    console.log(data);

    if (data.role == 'Artist') {
      res.redirect('/reg/solo-artist');
    } else if (data.role == 'Band') {
      res.redirect('/reg/band-page');
    } else if (data.role == 'Comedian') {
      res.redirect('/reg/perf-page');
    } else {
      res.send('Sorry You are not Authorized');
    }
  });
}); //* Logout Session

router.get('/logout', function (req, res) {
  req.session.destroy(function () {
    res.redirect('/reg/');
  });
});
module.exports = router;