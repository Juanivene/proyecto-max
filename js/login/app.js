import { validateAdmin } from "../validators.js";

const $formLogin = document.getElementById("form-login");
const $inputEmail = document.getElementById("input-email");
const $inputContraseña = document.getElementById("input-contraseña");

$formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateAdmin($inputEmail, $inputContraseña)) {
    alert("datos de admin invalidos");
  } else {
    alert("Ingresando al admin");
    window.location.href = "../../home.html";
  }
});
