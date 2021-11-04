"use strict";

//!==== Dependencies ====
var express = require('express');

var path = require('path');

var parser = require('body-parser');

var mongoose = require('mongoose');

var SoloLogin = require("./models/soloModel");

var BandLogin = require("./models/bandModel"); //!==== Environment Variables ====


require('dotenv').config(); //!==== Instanciation ====


var app = express();
var port = 3000;
mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true // useCreateIndex: true

});
mongoose.connection.on("open", function () {
  console.log("Mongoose conection is open");
}).on("error", function (err) {
  console.log("Connection error: ".concat(err.message));
}); //!==== Configurations/Settings ====

app.set("views", path.join(__dirname, "views")); // app.set("view engine", "pug");
//!==== Middleware ====

app.use(parser.urlencoded({
  extended: true
}));
app.use(express["static"](path.join(__dirname, "public"))); //!==== Routes ====
//*==== Landing ====

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/landing.html");
}); //*==== Roles ===

app.get("/role", function (req, res) {
  res.sendFile(__dirname + "/views/role.html");
}); //*==== Solo-login ===

app.get("/solo-login", function (req, res) {
  res.sendFile(__dirname + "/views/solo-login.html");
});
app.post("/solo-login", function (req, res) {
  var newSoloLogin = new SoloLogin({
    username: req.body.username,
    stagename: req.body.stagename,
    useremail: req.body.useremail,
    passid: req.body.passid,
    cardno: req.body.cardno,
    cardcvc: req.body.cardcvc
  });
  newSoloLogin.save();
  res.redirect("/solo-login");
}); //*==== Band-Login ===

app.get("/band-login", function (req, res) {
  res.sendFile(__dirname + "/views/band-login.html");
});
app.post("/band-login", function (req, res) {// console.log(req.body)
  // res.redirect("/band-login")
}); //*==== Perf-Login ===

app.get("/band-login", function (req, res) {
  res.sendFile(__dirname + "/views/perf-login.html");
});
app.post("/perf-login", function (req, res) {// console.log(req.body)
  // res.redirect("/perf-login")
}); //*==== Sign In ===

app.get("/sign-in", function (req, res) {
  res.sendFile(__dirname + "/views/sign-in.html");
});
app.post("/sign-in", function (req, res) {
  res.sendFile(__dirname + "/views/sign-in.html");
}); //*Error Routes

app.get("*", function (req, res) {
  res.status(404).send('Page Does Not Exist');
}); //*==== Server start ====

app.listen(port, function () {
  console.log("We are now live on ".concat(port));
});