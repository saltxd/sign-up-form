var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm-password");

function validatePassword() {
  if (password.value != confirm_password.value) {
    password.classList.add("error");
    confirm_password.classList.add("error");
  } else {
    password.classList.remove("error");
    confirm_password.classList.remove("error");
  }
}

password.addEventListener("change", validatePassword);
confirm_password.addEventListener("keyup", validatePassword);