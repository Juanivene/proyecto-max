import { estaLogueado } from "./utils.js";

const $adminbtn = document.getElementById("admin");

if (estaLogueado()) {
  $adminbtn.classList.remove("d-none");
}
