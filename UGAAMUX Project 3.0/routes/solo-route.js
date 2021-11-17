const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

//!=== Model ===
const SoloLogin = require("../models/soloModel");
const User = require("../models/userModel");

const router = express.Router();

router.get("/solo-login", (req, res) => {
    res.render("solo-login");
});

//! Instanciation of storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage })


//*==== Solo-login ====


router.post("/solo-login", upload.single('file'), async(req, res) => {
    try {
        const newSoloLogin = new SoloLogin(req.body);
        const newUser = new User(req.body);
        newSoloLogin.file = req.file.path;
        console.log(newSoloLogin);
        await newSoloLogin.save();
        await User.register(newUser, req.body.password, (err) => {
            if (err) {
                throw err;
            }
            res.redirect("/reg/solo-login");
        });
    } catch (err) {
        res.status(400).send("Sorry, Data was not sent to Database");
    }
});

router.get('/solo-artist', async(req, res) => {
    if (req.session.user) {
        try {
            const artist = await SoloLogin.findOne({ email: req.user.email });
            console.log(artist);
            res.render('solo-artistpage', { artist: artist });
        } catch {
            res.status(400).send('Unable to find artist');
        }
    } else {
        res.redirect('/reg/sign-in');
    }
});

module.exports = router;