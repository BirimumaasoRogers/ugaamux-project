"use strict";

var express = require('express');

var mongoose = require('mongoose');

var multer = require('multer'); //!=== Model ===


var PerfLogin = require("../models/perfModel");

var router = express.Router(); //! Instansiation of storage

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

router.get("/perf-login", function (req, res) {
  res.render("perf-login");
});
router.post("/perf-login", upload.single('file'), function _callee(req, res) {
  var newPerfLogin;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.body);
          _context.prev = 1;
          newPerfLogin = new PerfLogin(req.body);
          SoloLogin.file = req.file.path;
          console.log(SoloLogin);
          console.log("This is the file", req.file);
          _context.next = 8;
          return regeneratorRuntime.awrap(SoloLogin.register(newPerfLogin, req.body.passid, function (err) {
            if (err) {
              throw err;
            }

            res.redirect("/reg/perf-login");
          }));

        case 8:
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          res.status(400).send("Sorry, Data was not sent to Database");

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 10]]);
});
module.exports = router;