"use strict";

var validate = function validate() {
  var bandName = document.registration.bandname;
  var userEmail = document.registration.useremail;
  var passId = document.registration.password;
  var role = document.registration.role;
  var phoneNo = document.registration.phoneno;
  var location = document.registration.location;
  var startDate = document.registration.date;
  var photo = document.registration.file;
  var bandMember = document.registration.members;
  var genre = document.registration.genre;
  var userError = document.getElementById('error-username');
  var roleError = document.getElementById('error-role');
  var dateError = document.getElementById('error-date');
  var memberError = document.getElementById('error-member');
  var genreError = document.getElementById('error-genre'); //*======Band Name=======*//

  if (bandName.value == "") {
    alert('Please Enter Name');
    bandName.focus();
    bandName.style.border = "2px solid red";
    userError.innerHTML = "Band Name is required";
    userError.style = "color:red; font-size:15px;";
    return false;
  } else {
    userError.innerHTML = "";
    bandName.style.border = "2px solid green";
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
  } //*======Profile Photo======*//


  if (photo.value == "") {
    alert('Please Upload A Profile Photo');
    photo.focus();
    photo.style.border = "2px solid red";
    return false;
  } else {
    photo.style.border = "2px solid green";
  } //*======Start Date======*//


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
  } //*======Members======*//


  if (bandMember.value == "") {
    alert('Please Enter Password');
    bandMember.focus();
    bandMember.style.border = "2px solid red";
    memberError.innerHTML = "Member Number is required";
    memberError.style = "color:red; font-size:15px;";
    return false;
  } else {
    memberError.innerHTML = "";
    bandMember.style.border = "2px solid green";
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
  } //*======Genre======*//


  if (genre.value == "") {
    alert('Please Enter Password');
    genre.focus();
    genre.style.border = "2px solid red";
    genreError.innerHTML = "Genre is required";
    genreError.style = "color:red; font-size:15px;";
    return false;
  } else {
    genreError.innerHTML = "";
    genre.style.border = "2px solid green";
  }

  return true;
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