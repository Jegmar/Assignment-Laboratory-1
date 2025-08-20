const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("emailError"); 
const passwordError = document.getElementById("passwordError");
const successMsg = document.getElementById("loginSuccessMsg");



form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Username validation on form submit
  if (!username.value.trim()) {
    usernameError.textContent = "Please enter your username.";
    usernameError.style.display = "block";
    valid = false;
  } else if (!/^[a-zA-Z0-9]{3,}$/.test(username.value)) { 
    usernameError.textContent = "Please enter a valid username.";
    usernameError.style.display = "block";
    username.classList.add("error");
    valid = false;
  } else {
    usernameError.style.display = "none";
    username.classList.remove("error");
  }

  // Real-time validation (while typing)
  username.addEventListener("input", function () {
    if (!username.value.trim()) {
      // Empty input
      usernameError.textContent = "Please enter your username.";
      usernameError.style.display = "block";
    } else if (!/^[a-zA-Z0-9]{3,}$/.test(username.value)) {
      usernameError.textContent = "Please enter a valid username.";
      usernameError.style.display = "block";
      username.classList.add("error");
    } else {
      // Valid input
      usernameError.style.display = "none";
      username.classList.remove("error");
    }
  });

  // Password validation (only if username is valid)
  if (valid) {  
    if (!password.value || password.value.length < 6) {
      passwordError.textContent = "Password incorrect. Please try again.";
      passwordError.style.display = "block";
      valid = false;
    } else {
      passwordError.style.display = "none";
    }
  }


  // Success feedback
  const loginContainer = document.querySelector(".login-container");
  const successContainer = document.querySelector(".success-container");
  const successText = document.querySelector(".success-text");

  if (valid) {
    // Show success message
    successText.textContent = `Welcome, ${username.value}! You are now logged in.`;
    successContainer.classList.add("show");

    // Fade out login container
    loginContainer.classList.add("fade-out");

    // Hide login container completely after fade
    setTimeout(() => {
      loginContainer.style.display = "none";
    }, 500);

    // Roll-up success message after 2 seconds
    setTimeout(() => {
      successContainer.classList.remove("show");
    }, 2000);
  }




});

// ---------------- REGISTER ----------------
const registerForm = document.getElementById("registerForm");
const regUsername = document.getElementById("regUsername");
const regPassword = document.getElementById("regPassword");
const regConfirmPassword = document.getElementById("confirmPassword");
const regMsg = document.getElementById("message");
const registerSuccessContainer = document.querySelector(".register-success-container");
const registerSuccessText = document.querySelector("#registerSuccessMsg .success-text");

const regUsernameError = document.getElementById("regUsernameError");
const regPasswordError = document.getElementById("regPasswordError");


registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Username validation
  if (!regUsername.value.trim() || regUsername.value.length < 3) {
    regUsernameError.textContent = "Username must be at least 3 characters.";
    regUsernameError.style.display = "block";
    valid = false;
  } else {
    regUsernameError.style.display = "none";
  }

  // Password validation
  if (regPassword.value.length < 6) {
    regPasswordError.textContent = "Password must be at least 6 characters.";
    regPasswordError.style.display = "block";
    valid = false;
  } else if (regPassword.value !== regConfirmPassword.value) {
    regPasswordError.textContent = "Passwords do not match.";
    regPasswordError.style.display = "block";
    valid = false;
  } else {
    regPasswordError.style.display = "none";
  }

  // If valid, show registration success
  if (valid) {
    registerForm.reset();

    registerSuccessText.textContent = `Account ${regUsername.value} created successfully!`;
    registerSuccessContainer.classList.add("show");

    setTimeout(() => {
      registerSuccessContainer.classList.remove("show");
      registerContainer.style.display = "none";
      loginContainer.style.display = "block";
    }, 2000);
  }
});

// ---------------- TOGGLE FORMS ----------------
const registerLink = document.querySelector(".register-link a");
const loginLink = document.getElementById("showLogin");
const loginContainer = document.querySelector(".login-container");
const registerContainer = document.querySelector(".register-container");

// Hide register by default
registerContainer.style.display = "none";

registerLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginContainer.style.display = "none";
  registerContainer.style.display = "block";
});

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  registerContainer.style.display = "none";
  loginContainer.style.display = "block";
});