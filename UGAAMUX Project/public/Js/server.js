const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 5000

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://BirimumaasoRogers:roro2020@cluster0.ui4qh.mongodb.net/Forms", { useNewUrlParser: true }, { useUnifiedTopology: true });

const FormSchema = {
    username: String,
    stagename: String,
    useremail: String,
    passid: String,
    cardno: String,
    cardcvc: String
}
const Form = mongoose.model("Form", FormSchema)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Users/mac/Documents/Projects/UGAAMUX Project/HTML/solo-login.html");
})

app.post("/", (req, res) => {
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
})