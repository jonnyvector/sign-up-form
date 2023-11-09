const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

function checkPass() {
  const good_color = "#66cc66";
  const bad_color = "#ff6666";
  if (password.value === confirmPassword.value) {
    confirmPassword.style.backgroundColor = good_color;
    message.style.backgroundColor = good_color;
  } else {
    confirmPassword.style.backgroundColor = bad_color;
    message.style.backgroundColor = bad_color;
  }
}

console.log(passwordValue, confirmPasswordValue);
