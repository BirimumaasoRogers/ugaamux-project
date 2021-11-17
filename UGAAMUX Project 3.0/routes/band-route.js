const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

//!=== Model ===
const BandLogin = require("../models/bandModel");
const User = require("../models/userModel");

const router = express.Router();

//! Instansiation of storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage })


//*==== Band-Login ===
router.get("/band-login", (req, res) => {
    res.render("band-login");
});

router.post("/band-login", upload.single('file'), async(req, res) => {
    try {
        const newBandLogin = new BandLogin(req.body);
        const newUser = new User(req.body);
        newBandLogin.file = req.file.path;
        console.log(newBandLogin);
        await newBandLogin.save();
        await User.register(newUser, req.body.password, (err) => {
            if (err) {
                throw err;
            }
            res.redirect("/reg/band-login");
        });
    } catch (err) {
        res.status(400).send("Sorry, Data was not sent to Database");
    }
});

router.get('/band-page', async(req, res) => {
    if (req.session.user) {
        try {
            const band = await BandLogin.findOne({ email: req.user.email });
            console.log(band);
            res.render('band-page', { band: band });
        } catch {
            res.status(400).send('Unable to find Band');
        }
    } else {
        res.redirect('/reg/sign-in');
    }
});

module.exports = router;