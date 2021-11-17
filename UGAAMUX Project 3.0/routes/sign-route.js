const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

//!=== Model ===
const User = require("../models/userModel");
const SoloLogin = require("../models/soloModel");
const BandLogin = require("../models/bandModel");
const PerfLogin = require("../models/perfModel");

const router = express.Router();

//*==== Sign In ===
router.get("/sign-in", (req, res) => {
    res.render("sign-in");
});

router.post('/sign-in', passport.authenticate('local', { failureRedirect: '/reg/sign-in' }), (req, res) => {
    req.session.user = req.user;
    User.findOne({ email: req.body.email })
        //*Checking through their roles and redirecting them to respective pages
        .then((data) => {
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
        })
});

//* Logout Session
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/reg/');
    });
});
module.exports = router;