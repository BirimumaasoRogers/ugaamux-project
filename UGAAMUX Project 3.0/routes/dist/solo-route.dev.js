"use strict";

var express = require('express');

var mongoose = require('mongoose');

var multer = require('multer'); //!=== Model ===


var SoloLogin = require("../models/soloModel");

var User = require("../models/userModel");

var router = express.Router();
router.get("/solo-login", function (req, res) {
  res.render("solo-login");
}); //! Instanciation of storage

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'public/Images');
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({
  storage: storage
}); //*==== Solo-login ====

router.post("/solo-login", upload.single('file'), function _callee(req, res) {
  var newSoloLogin, newUser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          newSoloLogin = new SoloLogin(req.body);
          newUser = new User(req.body);
          newSoloLogin.file = req.file.path;
          console.log(newSoloLogin);
          _context.next = 7;
          return regeneratorRuntime.awrap(newSoloLogin.save());

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(User.register(newUser, req.body.password, function (err) {
            if (err) {
              throw err;
            }

            res.redirect("/reg/solo-login");
          }));

        case 9:
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.status(400).send("Sorry, Data was not sent to Database");

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
});
router.get('/solo-artist', function _callee2(req, res) {
  var artist;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!req.session.user) {
            _context2.next = 14;
            break;
          }

          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(SoloLogin.findOne({
            email: req.user.email
          }));

        case 4:
          artist = _context2.sent;
          console.log(artist);
          res.render('solo-artistpage', {
            artist: artist
          });
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          res.status(400).send('Unable to find artist');

        case 12:
          _context2.next = 15;
          break;

        case 14:
          res.redirect('/reg/sign-in');

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 9]]);
});
module.exports = router;