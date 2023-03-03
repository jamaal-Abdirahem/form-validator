"use strict";
const form = document.getElementById("form");
const username = document.getElementById("username");
const Email = document.getElementById("Email");
const password = document.getElementById("Password");
const confirmPassword = document.getElementById("comfirm Password");

// show input
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// check email is valid
function checkEmail(input) {
  const re = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${input.id} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${input.id} must be less than ${max} characters`);
  }
}

// check password match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}
// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, Email, password, confirmPassword]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(Email);
  checkPasswordMatch(password, confirmPassword);
  //   console.log(username.value);
  //   if (username.value === "") {
  //     showError(username, "username is required");
  //   } else {
  //     showSuccess(username);
  //   }
  //   if (Email.value === "") {
  //     showError(Email, "Email is required");
  //   } else if (!isValidEmail(Email.value)) {
  //     showError(Email, "Email is not valid");
  //   } else {
  //     showSuccess(Email);
  //   }
  //   if (password.value === "") {
  //     showError(password, "password is required");
  //   } else {
  //     showSuccess(password);
  //   }
  //   if (confirmPassword.value === "") {
  //     showError(confirmPassword, " password is not mutched");
  //   } else {
  //     showSuccess(confirmPassword);
  //   }
});
