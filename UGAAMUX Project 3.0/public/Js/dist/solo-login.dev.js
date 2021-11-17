"use strict";

var validate = function validate() {
  var userName = document.registration.username;
  var stageName = document.registration.stagename;
  var userEmail = document.registration.useremail;
  var passId = document.registration.password;
  var role = document.registration.role;
  var phoneNo = document.registration.phoneno;
  var location = document.registration.location;
  var nin = document.registration.nin;
  var photo = document.registration.file;
  var dob = document.registration.dob;
  var startDate = document.registration.date;
  var male = document.getElementById('msex');
  var female = document.getElementById('fsex');
  var userError = document.getElementById('error-username');
  var roleError = document.getElementById('error-role');
  var dateError = document.getElementById('error-dob');
  var genderError = document.getElementById('error-gender'); //*======User Name=======*//

  if (userName.value == "") {
    alert('Please Enter Name');
    userName.focus();
    userName.style.border = "2px solid red";
    userError.innerHTML = "User Name is required";
    userError.style = "color:red; font-size:15px;";
    return false;
  } else {
    userError.innerHTML = "";
    userName.style.border = "2px solid green";
  }

  var user = /^[A-Z a-z]+$/;

  if (!userName.value.match(user)) {
    alert('User Name should not have numbers');
    userName.focus();
    userName.style.border = "2px solid red";
    return false;
  } else {
    userName.style.border = "2px solid green";
  } //*======Stage Name======*//


  if (stageName.value == "") {
    alert('Please Enter Stage Name');
    stageName.focus();
    stageName.style.border = "2px solid red";
    return false;
  } else {
    stageName.style.border = "2px solid green";
  } //*======User Email======*//


  if (userEmail.value == "") {
    alert('Please Enter Email');
    userEmail.focus();
    userEmail.style.border = "2px solid red";
    return false;
  }

  var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!userEmail.value.match(email)) {
    alert('Please fill in your Email');
    userEmail.focus();
    userEmail.style.border = "2px solid red";
    return false;
  } else {
    userEmail.style.border = "2px solid green";
  } //*======Password======*//


  if (passId.value == "") {
    alert('Please Enter Password');
    passId.focus();
    passId.style.border = "2px solid red";
    return false;
  } else {
    passId.style.border = "2px solid green";
  } //*======Role=======*//


  if (role.value == "") {
    alert('Please Enter Name');
    role.focus();
    role.style.border = "2px solid red";
    roleError.innerHTML = "Role is required";
    roleError.style = "color:red; font-size:15px;";
    return false;
  } else {
    roleError.innerHTML = "";
    role.style.border = "2px solid green";
  } //*======National ID======*//


  if (nin.value == "") {
    alert('Please Enter National ID Number');
    nin.focus();
    nin.style.border = "2px solid red";
    return false;
  } else {
    nin.style.border = "2px solid green";
  }

  var national = /[a-zA-Z][a-zA-Z][0-9]+[a-zA-Z]/;

  if (!nin.value.match(national)) {
    alert('National ID be written properly');
    nin.focus();
    nin.style.border = "2px solid red";
    return false;
  } else {
    nin.style.border = "2px solid green";
  } //*======Profile Photo======*//


  if (photo.value == "") {
    alert('Please Upload A Profile Photo');
    photo.focus();
    photo.style.border = "2px solid red";
    return false;
  } else {
    photo.style.border = "2px solid green";
  } //*======Start Date======*//


  if (dob.value == "") {
    alert('Please Fill in Date');
    dob.focus();
    dob.style.border = "2px solid red";
    return false;
  } else {
    dob.style.border = "2px solid green";
  } //*======Phone Number======*//


  if (phoneNo.value == "") {
    alert('Please fill in your Card Number');
    phoneNo.focus();
    phoneNo.style.border = "2px solid red";
    return false;
  } else {
    phoneNo.style.border = "2px solid green";
  }

  var phone = /^[0-9]{10}$/g;

  if (!phoneNo.value.match(phone)) {
    alert('Phone Number should be written properly');
    phoneNo.focus();
    phoneNo.style.border = "2px solid red";
    return false;
  } else {
    phoneNo.style.border = "2px solid green";
  } //*======Location======*//


  if (location.value == "") {
    alert('Please fill in your Credential');
    location.focus();
    location.style.border = "2px solid red";
    return false;
  } else {
    location.style.border = "2px solid green";
  } //*======Date Of Birth======*//


  if (startDate.value == "") {
    alert('Please Fill in Date');
    startDate.focus();
    startDate.style.border = "2px solid red";
    dateError.innerHTML = "Launch Date is required";
    dateError.style = "color:red; font-size:15px;";
    return false;
  } else {
    dateError.innerHTML = "";
    startDate.style.border = "2px solid green";
  } //*======Gender======*//


  if (female.checked == false && male.checked == false) {
    genderError.innerHTML = "Please select your gender";
    genderError.style = "color:red; font-size:15px;";
    return false;
  } else {
    genderError.innerHTML = "";
  }
};

var formElement = document.getElementById("regform");
formElement.addEventListener('submit', function (e) {
  var validationFailed = false;
  validate();

  if (validationFailed) {
    e.preventDefault();
    return false;
  }
});