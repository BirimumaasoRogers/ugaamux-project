const validate = () => {
    const userName = document.registration.username
    const stageName = document.registration.stagename;
    const userEmail = document.registration.useremail;
    const passId = document.registration.password;
    const role = document.registration.role;
    const phoneNo = document.registration.phoneno;
    const location = document.registration.location;
    const nin = document.registration.nin;
    const photo = document.registration.file;
    const dob = document.registration.dob;
    const startDate = document.registration.date;

    const male = document.getElementById('msex');
    const female = document.getElementById('fsex');
    const userError = document.getElementById('error-username');
    const roleError = document.getElementById('error-role');
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

    //*======Role=======*//
    if (role.value == "") {
        alert('Please Enter Name');
        role.focus()
        role.style.border = "2px solid red";
        roleError.innerHTML = "Role is required"
        roleError.style = "color:red; font-size:15px;"
        return false;
    } else {
        roleError.innerHTML = ""
        role.style.border = "2px solid green"
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

    //*======Profile Photo======*//
    if (photo.value == "") {
        alert('Please Upload A Profile Photo');
        photo.focus()
        photo.style.border = "2px solid red";
        return false;
    } else {
        photo.style.border = "2px solid green"
    }

    //*======Start Date======*//
    if (dob.value == "") {
        alert('Please Fill in Date');
        dob.focus()
        dob.style.border = "2px solid red";
        return false;
    } else {
        dob.style.border = "2px solid green"
    }

    //*======Phone Number======*//
    if (phoneNo.value == "") {
        alert('Please fill in your Card Number')
        phoneNo.focus()
        phoneNo.style.border = "2px solid red"
        return false;
    } else {
        phoneNo.style.border = "2px solid green"
    }
    const phone = /^[0-9]{10}$/g
    if (!phoneNo.value.match(phone)) {
        alert('Phone Number should be written properly')
        phoneNo.focus()
        phoneNo.style.border = "2px solid red"
        return false;
    } else {
        phoneNo.style.border = "2px solid green"
    }

    //*======Location======*//
    if (location.value == "") {
        alert('Please fill in your Credential')
        location.focus()
        location.style.border = "2px solid red"
        return false;
    } else {
        location.style.border = "2px solid green"
    }

    //*======Date Of Birth======*//
    if (startDate.value == "") {
        alert('Please Fill in Date');
        startDate.focus()
        startDate.style.border = "2px solid red";
        dateError.innerHTML = "Launch Date is required"
        dateError.style = "color:red; font-size:15px;"
        return false;
    } else {
        dateError.innerHTML = ""
        startDate.style.border = "2px solid green"
    }

    //*======Gender======*//
    if (female.checked == false && male.checked == false) {
        genderError.innerHTML = "Please select your gender";
        genderError.style = "color:red; font-size:15px;"
        return false;
    } else {
        genderError.innerHTML = ""
    }
}
const formElement = document.getElementById("regform");
formElement.addEventListener('submit', function(e) {
    var validationFailed = false;
    validate();
    if (validationFailed) {
        e.preventDefault();
        return false;
    }
})