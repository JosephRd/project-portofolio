var errorMsg = document.getElementById("error");

function Validate() {
  if (!validateName()) {
    return;
  } else if (!validateEmail()) {
    return;
  } else if (!validateNumber()) {
    return;
  } else if (!validateComment()) {
    return;
  }
}

function validateName() {
  var Name = document.getElementById("user_name").value;
  // alert(Name);

  if (Name == "") {
    errorMsg.innerHTML = "Name must be filled!";
    return false;
  }

  errorMsg.innerHTML = "";
  return true;
}

function validateEmail() {
  var Email = document.getElementById("user_email").value;
  var valid = Email.includes("@");

  if (Email == "") {
    errorMsg.innerHTML = "Email must be filled!";
    return false;
  } else if (!valid) {
    errorMsg.innerHTML = "Invalid Email, must with @";
    return false;
  }

  error.innerHTML = "";
  return true;
}

function validateNumber() {
  var PhoneNumber = document.getElementById("user_number").value;

  if (PhoneNumber == "") {
    errorMsg.innerHTML = "Phone Number must be filled";
    return false;
  } else if (isNaN(PhoneNumber)) {
    errorMsg.innerHTML = "Phone Number must be numeric!";
    return false;
  } else if (PhoneNumber.length > 14) {
    errorMsg.innerHTML = "Phone Number must less than 14 digit";
    return false;
  } else if (!PhoneNumber.startsWith("08")) {
    errorMsg.innerHTML = "Phone Number must begin with 08";
    return false;
  }

  error.innerHTML = "";
  return true;
}

function validateComment() {
  var Comment = document.getElementById("user_comment").value;

  if (Comment == "") {
    errorMsg.innerHTML = "Comment must be filled";
    return false;
  } else if (Comment.split(" ").length < 5) {
    errorMsg.innerHTML = "Comment must be more than 5 words and max 100 words";
    return false;
  } else if (Comment.split(" ").length > 100) {
    errorMsg.innerHTML = "Comment must be more than 5 words and max 100 words";
    return false;
  }

  error.innerHTML = "";
  return true;
}
