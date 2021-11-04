const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");

const port = 8000

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", "./views");

mongoose.connect("mongodb+srv://BirimumaasoRogers:roro2020@cluster0.ui4qh.mongodb.net/Forms", { useNewUrlParser: true }, { useUnifiedTopology: true });

const FormSchema = {
    username: String,
    stagename: String,
    useremail: String,
    passid: String,
    cardno: String,
    cardcvc: String
}
const Form = mongoose.model("Form", FormSchema, 'solo-login')

//*============ Solo-Login Form =================*// 
app.get("/", (req, res) => {
    res.render("/Users/mac/Documents/Projects/UGAAMUX Project/views/solo-login.pug");
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
});