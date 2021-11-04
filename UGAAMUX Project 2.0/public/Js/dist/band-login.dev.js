"use strict";

var validate = function validate() {
  var bandName = document.registration.bandname;
  var userEmail = document.registration.useremail;
  var passId = document.registration.passid;
  var startDate = document.registration.date;
  var bandMember = document.registration.members;
  var genre = document.registration.genre;
  var userError = document.getElementById('error-username');
  var dateError = document.getElementById('error-date');
  var memberError = document.getElementById('error-member');
  var genreError = document.getElementById('error-genre'); //*======User Name=======*//

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
};

var formElement = document.getElementById("regform");
formElement.addEventListener('submit', function (e) {
  e.preventDefault();
  validate();
});