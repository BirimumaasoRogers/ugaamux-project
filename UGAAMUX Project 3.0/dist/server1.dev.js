"use strict";

//!==== Dependencies ====
var express = require('express');

var path = require('path');

var mongoose = require('mongoose');

var passport = require('passport');

var soloRoute = require("./routes/solo-route");

var bandRoute = require("./routes/band-route");

var perfRoute = require("./routes/perf-route");

var signRoute = require("./routes/sign-route"); //!=== Models ====


var User = require("./models/userModel"); //!=== Sessions ===


var expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false
}); //!==== Environment Variables ====


require('dotenv').config(); //!==== Instanciation ====


var app = express();
var port = 3000; //!==== Mongoose Connection ====

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on("open", function () {
  console.log("Mongoose conection is open");
}).on("error", function (err) {
  console.log("Connection error: ".concat(err.message));
}); //!==== Configurations/Settings ====

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); //!==== Middleware ====

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express["static"](path.join(__dirname, "public")));
app.use('/public/Images', express["static"](__dirname + '/public/Images'));
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); //!==== Routes ====

app.use("/reg", soloRoute);
app.use("/reg", bandRoute);
app.use("/reg", perfRoute);
app.use("/reg", signRoute); //*==== Landing ====

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/landing.html");
}); //*==== Roles ===

app.get("/role", function (req, res) {
  res.sendFile(__dirname + "/views/role.html");
}); //*Error Routes

app.get("*", function (req, res) {
  res.status(404).send('Page Does Not Exist');
}); //*==== Server start ====

app.listen(port, function () {
  console.log("We are now live on ".concat(port));
});