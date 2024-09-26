import {
  validateNumber,
  validateEmail,
  validatePassword,
  validatePasswords,
} from "../validators.js";

const $formSingUp = document.getElementById("form-singup");
const $inputEmail = document.getElementById("login_input_email");
const $inputContraseña = document.getElementById("login_input_contraseña");
const $inputRepContraseña = document.getElementById(
  "login_input_repcontraseña"
);
const $inputTelefono = document.getElementById("login_input_telefono");

$formSingUp.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !validateEmail($inputEmail) ||
    !validatePassword($inputContraseña) ||
    !validatePassword($inputRepContraseña) ||
    !validateNumber($inputTelefono) ||
    !validatePasswords($inputContraseña, $inputRepContraseña)
  ) {
    alert("revisar");
    return;
  } else {
    alert("todo ok");
    window.location.href = "../../404.html";
  }
});
