const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { Router } = require("express");
const port = 5000

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "./views");


mongoose.connect("mongodb+srv://BirimumaasoRogers:roro2020@cluster0.ui4qh.mongodb.net/Forms", { useNewUrlParser: true }, { useUnifiedTopology: true });

const Form = mongoose.model("Form", FormSchema, 'solo-login')

router.get("/", (req, res) => {
    res.render("/Users/mac/Documents/Projects/UGAAMUX Project/views/solo-login.pug");
})

router.post("/", (req, res) => {
    let newForm = new Form({
        username: req.body.username,
        stagename: req.body.stagename,
        useremail: req.body.email,
        passid: req.body.passid,
        cardno: req.body.cardno,
        cardcvc: req.body.cardcvc
    })
    newForm.save();
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});