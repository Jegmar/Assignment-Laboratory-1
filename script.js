const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("emailError"); // reused for username
const passwordError = document.getElementById("passwordError");
const successMsg = document.getElementById("successMsg");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Username validation on form submit
  if (!username.value.trim()) {
    usernameError.textContent = "Please enter your username.";
    usernameError.style.display = "block";
    valid = false;
  } else if (!/^[a-zA-Z0-9]{3,}$/.test(username.value)) { // only letters, numbers, underscore allowed
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
      // Invalid username (example: at least 3 characters, alphanumeric + . _ - allowed)
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
  if (valid) {
    successMsg.textContent = "Login successful!";
    successMsg.style.display = "block";

    // Optional: simulate redirect
    setTimeout(() => {
      successMsg.style.display = "none";
      alert("Redirecting to dashboard...");
      // window.location.href = "dashboard.html"; // Uncomment if you have a page
    }, 1500);
  }
});

// ---------------- REGISTER ----------------
const registerForm = document.getElementById("registerForm");
const regUsername = document.getElementById("regUsername");
const regPassword = document.getElementById("regPassword");
const regConfirmPassword = document.getElementById("confirmPassword");
const regMsg = document.getElementById("message");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  if (!regUsername.value.trim() || regUsername.value.length < 3) {
    regMsg.textContent = "Username must be at least 3 characters.";
    regMsg.style.color = "red";
    valid = false;
  } else if (regPassword.value.length < 6) {
    regMsg.textContent = "Password must be at least 6 characters.";
    regMsg.style.color = "red";
    valid = false;
  } else if (regPassword.value !== regConfirmPassword.value) {
    regMsg.textContent = "Passwords do not match.";
    regMsg.style.color = "red";
    valid = false;
  }

  if (valid) {
    regMsg.textContent = "Registration successful!";
    regMsg.style.color = "green";
    registerForm.reset();
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