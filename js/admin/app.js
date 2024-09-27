import {
  validateDescripcion,
  validateFoto,
  validateGenero,
  validateTitulo,
  validateVideo,
} from "../validators.js";
import { agregarPelicula } from "./abm.js";

const $formAgregarPelicula = document.getElementById("form_agregar_pelicula");
const $inputTitulo = document.getElementById("titulo");
const $inputGenero = document.getElementById("genero");
const $inputDescripcion = document.getElementById("descripcion");
const $inputFotoCaratula = document.getElementById("foto_caratula");
const $inputFotoPortada = document.getElementById("foto_portada");
const $inputTrailer = document.getElementById("link_trailer");

$inputTitulo.addEventListener("blur", () => {
  validateTitulo($inputTitulo);
});
$inputGenero.addEventListener("blur", () => {
  validateGenero($inputGenero);
});
$inputDescripcion.addEventListener("blur", () => {
  validateDescripcion($inputDescripcion);
});
$inputFotoCaratula.addEventListener("blur", () => {
  validateFoto($inputFotoCaratula);
});
$inputFotoPortada.addEventListener("blur", () => {
  validateFoto($inputFotoPortada);
});
$inputTrailer.addEventListener("blur", () => {
  validateVideo($inputTrailer);
});

$formAgregarPelicula.addEventListener("submit", (e) => {
  e.preventDefault();
  let titulo = $inputTitulo.value;
  let genero = $inputGenero.value;
  let descripcion = $inputDescripcion.value;
  let fotoCaratula = $inputFotoCaratula.value;
  let fotoPortada = $inputFotoPortada.value;
  let trailer = $inputTrailer.value;

  if (
    !validateTitulo($inputTitulo) ||
    !validateGenero($inputGenero) ||
    !validateDescripcion($inputDescripcion) ||
    !validateFoto($inputFotoCaratula) ||
    !validateFoto($inputFotoPortada) ||
    !validateVideo($inputTrailer)
  ) {
    alert("revisa los campos");
  }

  agregarPelicula(
    titulo,
    genero,
    descripcion,
    fotoCaratula,
    fotoPortada,
    trailer
  );
  $formAgregarPelicula.reset();
  alert("Pelicula creada exitosamente")
});
