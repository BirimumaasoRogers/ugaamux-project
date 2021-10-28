const validate = () => {
        const userName = document.registration.username
        const stageName = document.registration.stagename;
        const userEmail = document.registration.useremail;
        const passId = document.registration.passid;
        const cardNo = document.registration.cardno;
        const cardCvc = document.registration.cardcvc;

        //?Theres an issue with dob?//
        const dob = document.getElementsByClassName('.dob');

        const male = document.getElementById('msex');
        const female = document.getElementById('fsex');
        const userError = document.getElementById('error-username');
        const dateError = document.getElementById('error-dob')
        const genderError = document.getElementById('error-gender');

        //*======User Name=======*//
        if (userName.value == "") {
            alert('Please Enter Name');
            userName.focus()
            userName.style.border = "2px solid red";
            userError.innerHTML = "User Name is required"
            userError.style = "color:red; font-size:15px;"
            return false;
        } else {
            userError.innerHTML = ""
        }

        const user = /^[A-Z a-z]+$/
        if (!userName.value.match(user)) {
            alert('User Name should not have numbers')
            userName.focus()
            userName.style.border = "2px solid red"
            return false;
        } else {
            userName.style.border = "2px solid green"
        }

        //*======Stage Name======*//
        if (stageName.value == "") {
            alert('Please Enter Stage Name');
            stageName.focus()
            stageName.style.border = "2px solid red";
            return false;
        } else {
            stageName.style.border = "2px solid green"
        }

        //*======User Email======*//
        if (userEmail.value == "") {
            alert('Please Enter Email');
            userEmail.focus()
            userEmail.style.border = "2px solid red";
            return false;
        }
        const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!userEmail.value.match(email)) {
            alert('Please fill in your Email')
            userEmail.focus()
            userEmail.style.border = "2px solid red"
            return false;
        } else {
            userEmail.style.border = "2px solid green"
        }

        //*======Password======*//
        if (passId.value == "") {
            alert('Please Enter Password');
            passId.focus()
            passId.style.border = "2px solid red";
            return false;
        } else {
            passId.style.border = "2px solid green"
        }

        //*======Card Number======*//
        if (cardNo.value == "") {
            alert('Please fill in your Card Number')
            cardNo.focus()
            cardNo.style.border = "2px solid red"
            return false;
        } else {
            cardNo.style.border = "2px solid green"
        }

        //*======Card CVC======*//
        if (cardCvc.value == "") {
            alert('Please fill in your Credential')
            cardCvc.focus()
            cardCvc.style.border = "2px solid red"
            return false;
        } else {
            cardCvc.style.border = "2px solid green"
        }

        //!======D.O.B======!//
        if (dob.value == "") {
            alert('Please fill in your Date Of Birth')
            dob.focus()
            dob.style.border = "2px solid red"
            dateError.innerHTML = "Date of Birth is required"
            dateError.style = "color:red; font-size:15px;"
            return false;
        } else {
            dateError.innerHTML = ""
        }

        //*======Gender======*//
        if (female.checked == false && male.checked == false) {
            genderError.innerHTML = "Please select your gender";
            genderError.style = "color:red; font-size:15px;"
            return false;
        } else {
            genderError.innerHTML = ""
        }
        return true;
    }
    // const formElement = document.getElementById("regform");
    // formElement.addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     validate();
    // })



//*================================Form Handle=================================*//
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 5000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

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

app.get("/", (req, res) => {
    res.sendFile("/Users/mac/Documents/Projects/UGAAMUX Project/public/HTML/solo-login.html");
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