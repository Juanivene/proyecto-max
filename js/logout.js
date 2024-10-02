import { estaLogueado } from "./utils.js";

const $adminbtn = document.getElementById("admin");

if (estaLogueado()) {
  $adminbtn.classList.remove("d-none");
}

const $logoutbtn = document.getElementById("salir");

$logoutbtn.addEventListener("click", () => {
  sessionStorage.removeItem("estaLogueado");
});
