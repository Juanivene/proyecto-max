import { estaLogueado } from "../utils.js";
import {
  validateEmail,
  validatePassword,
} from "../validators.js";
import { Usuario } from "./admin.js";

const $formLogin = document.getElementById("form-login");
const $inputEmail = document.getElementById("input-email");
const $inputContraseña = document.getElementById("input-contraseña");


if (estaLogueado()) {
  window.location.replace("../../admin.html");
}
const usuario = new Usuario("juani@admin.com", "admin");

$formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateEmail($inputEmail) && validatePassword($inputContraseña)) {
    const email = $inputEmail.value;
    const conraseña = $inputContraseña.value;

    if (usuario.validarCredenciales(email, conraseña)) {
      sessionStorage.setItem("estaLogueado", true);
      sessionStorage.setItem(
        "admin",
        JSON.stringify({
          email: usuario.email,
          id: usuario.id,
        })
      );
      alert("ingresando al admin");
      window.location.assign("../../home.html");
    } else {
      alert("credenciales incorrectas");
    }
  }
});
