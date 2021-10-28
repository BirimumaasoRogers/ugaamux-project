const validate = () => {
    const userName = document.registration.username
    const stageName = document.registration.stagename;
    const userEmail = document.registration.useremail;
    const passId = document.registration.passid;
    const userError = document.getElementById('error-username');
    const stageError = document.getElementById('error-stagename');
    const emailError = document.getElementById('error-email');
    const passError = document.getElementById('error-password');

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
        userName.style.border = "2px solid maroon"
    }

    //*======Stage Name======*//
    if (stageName.value == "") {
        alert('Please Enter Stage Name');
        stageName.focus()
        stageName.style.border = "2px solid red";
        stageError.innerHTML = "Stage Name is required"
        stageError.style = "color:red; font-size:15px;"
        return false;
    } else {
        stageError.innerHTML = ""
        stageName.style.border = "2px solid maroon"
    }

    //*======User Email======*//
    if (userEmail.value == "") {
        alert('Please Enter Email');
        userEmail.focus()
        userEmail.style.border = "2px solid red";
        emailError.innerHTML = "User Email is required"
        emailError.style = "color:red; font-size:15px;"
        return false;
    } else {
        emailError.innerHTML = ""
    }
    const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!userEmail.value.match(email)) {
        alert('Please fill in your Email')
        userEmail.focus()
        userEmail.style.border = "2px solid red"
        return false;
    } else {
        userEmail.style.border = "2px solid maroon"
    }

    //*======Password======*//
    if (passId.value == "") {
        alert('Please Enter Password');
        passId.focus()
        passId.style.border = "2px solid red";
        passError.innerHTML = "Password is required"
        passError.style = "color:red; font-size:15px;"
        return false;
    } else {
        passError.innerHTML = ""
        passId.style.border = "2px solid maroon"
    }
    return true;
}
const formElement = document.getElementById("signform");
formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    validate();
})

//*==========================================================================================================
const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();