let signupForm = document.querySelector(".my-form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");

signupForm.addEventListener("submit", function(e) {
   e.preventDefault();

   console.log("Email:", email.value);
   console.log("Password:", password.value);
});

function onChange() {
   if (confirmPassword.value === password.value) {
       confirmPassword.setCustomValidity("");
   } else {
       confirmPassword.setCustomValidity("Passwords do not match!");
    }
}
 password.addEventListener("input", onChange);
 confirmPassword.addEventListener("input", onChange);
