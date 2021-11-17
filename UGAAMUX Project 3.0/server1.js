//!==== Dependencies ====
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');

const soloRoute = require("./routes/solo-route");
const bandRoute = require("./routes/band-route");
const perfRoute = require("./routes/perf-route");
const signRoute = require("./routes/sign-route");

//!=== Models ====
const User = require("./models/userModel");

//!=== Sessions ===
const expressSession = require("express-session")({
    secret: "secret",
    resave: false,
    saveUninitialized: false
});

//!==== Environment Variables ====
require('dotenv').config();

//!==== Instanciation ====
const app = express();
const port = 3000;

//!==== Mongoose Connection ====
mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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
app.set("view engine", "pug");


//!==== Middleware ====
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use('/public/Images', express.static(__dirname + '/public/Images'))

app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//!==== Routes ====
app.use("/reg", soloRoute);
app.use("/reg", bandRoute);
app.use("/reg", perfRoute);
app.use("/reg", signRoute);

//*==== Landing ====
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/landing.html");
});

//*==== Roles ===
app.get("/role", (req, res) => {
    res.sendFile(__dirname + "/views/role.html");
});


//*Error Routes
app.get("*", (req, res) => {
    res.status(404).send('Page Does Not Exist')
});

//*==== Server start ====
app.listen(port, () => {
    console.log(`We are now live on ${port}`);
})