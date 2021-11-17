"use strict";

var validate = function validate() {
  var artistID = document.registration.artistID;
  var userEmail = document.registration.useremail;
  var passId = document.registration.passid;
  var userError = document.getElementById('error-username');
  var emailError = document.getElementById('error-email');
  var passError = document.getElementById('error-password'); // //*======Artist ID=======*//
  // if (artistID.value == "") {
  //     alert('Please Enter Artist ID');
  //     artistID.focus()
  //     artistID.style.border = "2px solid red";
  // userError.innerHTML = "Artist ID is required"
  //     userError.style = "color:red; font-size:15px;"
  //     return false;
  // } else {
  //     userError.innerHTML = ""
  // }
  // const artist = /[a-zA-Z][0-9]\dmux/
  // if (!artistID.value.match(artist)) {
  //     alert('Fill In Correct ID')
  //     artistID.focus()
  //     artistID.style.border = "2px solid red"
  //     return false;
  // } else {
  //     artistID.style.border = "2px solid maroon"
  // }
  //*======User Email======*//

  if (userEmail.value == "") {
    alert('Please Enter Email');
    userEmail.focus();
    userEmail.style.border = "2px solid red";
    emailError.innerHTML = "User Name is required";
    emailError.style = "color:red; font-size:15px;";
    return false;
  } else {
    emailError.innerHTML = "";
  }

  var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!userEmail.value.match(email)) {
    alert('Please fill in your Email');
    userEmail.focus();
    userEmail.style.border = "2px solid red";
    return false;
  } else {
    userEmail.style.border = "2px solid maroon";
  } //*======Password======*//


  if (passId.value == "") {
    alert('Please Enter Password');
    passId.focus();
    passId.style.border = "2px solid red";
    passError.innerHTML = "Password is required";
    passError.style = "color:red; font-size:15px;";
    return false;
  } else {
    passError.innerHTML = "";
    passId.style.border = "2px solid maroon";
  }

  return true;
};

var formElement = document.getElementById("signform");
formElement.addEventListener('submit', function () {
  // e.preventDefault();
  validate();
});