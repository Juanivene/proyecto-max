import {
  validateDescripcion,
  validateFoto,
  validateGenero,
  validateTitulo,
  validateVideo,
} from "../validators.js";

const $formAgregarPelicula = document.getElementById("form_agregar_pelicula");
const $inputTitulo = document.getElementById("titulo");
const $inputGenero = document.getElementById("genero");
const $inputDescripcion = document.getElementById("descripcion");
const $inputFotoCaratula = document.getElementById("foto_caratula");
const $inputFotoPortada = document.getElementById("foto_portada");
const $inputTrailer = document.getElementById("link_trailer");

$formAgregarPelicula.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    !validateTitulo($inputTitulo) ||
    !validateGenero($inputGenero) ||
    !validateDescripcion($inputDescripcion) ||
    !validateFoto($inputFotoCaratula) ||
    !validateFoto($inputFotoPortada) ||
    !validateVideo($inputTrailer)
  ) {
    alert("revisa los campos");
  } else {
    console.log("ta bien");
  }
});
