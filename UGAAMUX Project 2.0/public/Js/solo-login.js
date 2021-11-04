const validate = () => {
    const userName = document.registration.username
    const stageName = document.registration.stagename;
    const userEmail = document.registration.useremail;
    const passId = document.registration.passid;
    const cardNo = document.registration.cardno;
    const cardCvc = document.registration.cardcvc;
    const nin = document.registration.nin;
    const startDate = document.registration.date;

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
        userName.style.border = "2px solid green"
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


    //*======National ID======*//
    if (nin.value == "") {
        alert('Please Enter National ID Number');
        nin.focus()
        nin.style.border = "2px solid red";
        return false;
    } else {
        nin.style.border = "2px solid green"
    }
    const national = /[a-zA-Z][a-zA-Z][0-9]+[a-zA-Z]/
    if (!nin.value.match(national)) {
        alert('National ID be written properly')
        nin.focus()
        nin.style.border = "2px solid red"
        return false;
    } else {
        nin.style.border = "2px solid green"
    }

    //*======Start Date======*//
    if (startDate.value == "") {
        alert('Please Fill in Date');
        startDate.focus()
        startDate.style.border = "2px solid red";
        return false;
    } else {
        startDate.style.border = "2px solid green"
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
const formElement = document.getElementById("regform");
formElement.addEventListener('submit', function() {
    // e.preventDefault();
    validate();
})