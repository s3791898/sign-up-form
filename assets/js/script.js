document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    if (!passwordValidation()) {
      event.preventDefault(); // Prevents the form from being submitted if the validation fails
    }
  });

function passwordValidation() {
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const passwordErrorMessage = document.getElementById("password-match-error");

  // Regular expressions for uppercase letter and symbol
  const uppercaseRegex = /[A-Z]/;
  const symbolRegex = /[-!$%^&*()_+|~=`{}[\]:";'<>?,./]/;

  passwordInput.classList.remove("error");
  confirmPasswordInput.classList.remove("error");

  // Check if passwords match
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordErrorMessage.textContent = "* Passwords do not match";
    passwordInput.classList.add("error");
    confirmPasswordInput.classList.add("error");
    return false;
  }
  // Check if password contains an uppercase letter and a symbol
  else if (
    !uppercaseRegex.test(passwordInput.value) ||
    !symbolRegex.test(passwordInput.value)
  ) {
    passwordErrorMessage.textContent =
      "* Password must contain an uppercase letter and a symbol";
    passwordInput.classList.add("error");
    confirmPasswordInput.classList.add("error");
    return false;
  } else {
    passwordErrorMessage.textContent = "";
    return true;
  }
}
