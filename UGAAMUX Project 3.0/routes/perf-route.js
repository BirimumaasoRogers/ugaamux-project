const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

//!=== Model ===
const PerfLogin = require("../models/perfModel");

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


//*==== Solo-login ====
router.get("/perf-login", (req, res) => {
    res.render("perf-login");
});

router.post("/perf-login", upload.single('file'), async(req, res) => {
    console.log(req.body);
    try {
        const newPerfLogin = new PerfLogin(req.body);
        SoloLogin.file = req.file.path;
        console.log(SoloLogin);
        console.log("This is the file", req.file)
        await SoloLogin.register(newPerfLogin, req.body.passid, (err) => {
            if (err) {
                throw err;
            }
            res.redirect("/reg/perf-login");
        });
    } catch (err) {
        res.status(400).send("Sorry, Data was not sent to Database");
    }
});

module.exports = router;