//!==== Dependencies ====
const express = require('express');
const path = require('path');
const parser = require('body-parser')
const mongoose = require('mongoose');
const SoloLogin = require("./models/soloModel")
const BandLogin = require("./models/bandModel")

//!==== Environment Variables ====
require('dotenv').config();

//!==== Instanciation ====
const app = express();
const port = 3000;

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
});

mongoose.connection
    .on("open", () => {
        console.log("Mongoose conection is open")
    })
    .on("error", err => {
        console.log(`Connection error: ${err.message}`)
    })

//!==== Configurations/Settings ====
app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");

//!==== Middleware ====
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

//!==== Routes ====
//*==== Landing ====
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/landing.html");
});

//*==== Roles ===
app.get("/role", (req, res) => {
    res.sendFile(__dirname + "/views/role.html");
});

//*==== Solo-login ===
app.get("/solo-login", (req, res) => {
    res.sendFile(__dirname + "/views/solo-login.html");
});

app.post("/solo-login", (req, res) => {
    const newSoloLogin = new SoloLogin({
        username: req.body.username,
        stagename: req.body.stagename,
        useremail: req.body.useremail,
        passid: req.body.passid,
        cardno: req.body.cardno,
        cardcvc: req.body.cardcvc
    })
    newSoloLogin.save();
    res.redirect("/solo-login")
});

//*==== Band-Login ===
app.get("/band-login", (req, res) => {
    res.sendFile(__dirname + "/views/band-login.html");
});

app.post("/band-login", (req, res) => {
    // console.log(req.body)
    // res.redirect("/band-login")
});

//*==== Perf-Login ===
app.get("/band-login", (req, res) => {
    res.sendFile(__dirname + "/views/perf-login.html");
});

app.post("/perf-login", (req, res) => {
    // console.log(req.body)
    // res.redirect("/perf-login")
});

//*==== Sign In ===
app.get("/sign-in", (req, res) => {
    res.sendFile(__dirname + "/views/sign-in.html");
});

app.post("/sign-in", (req, res) => {
    res.sendFile(__dirname + "/views/sign-in.html");
});





//*Error Routes
app.get("*", (req, res) => {
    res.status(404).send('Page Does Not Exist')
});

//*==== Server start ====
app.listen(port, () => {
    console.log(`We are now live on ${port}`);
})