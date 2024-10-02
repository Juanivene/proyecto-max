import { estaEditado, obtenerPeliculasLs } from "../utils.js";
import {
  validateDescripcion,
  validateFoto,
  validateGenero,
  validateTitulo,
  validateVideo,
} from "../validators.js";
import { agregarPelicula, cargarTabla, editarPelicula } from "./abm.js";
cargarTabla();

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
  } else {
    if (estaEditado()) {
      editarPelicula(
        titulo,
        genero,
        descripcion,
        fotoCaratula,
        fotoPortada,
        trailer
      );
    } else {
      agregarPelicula(
        titulo,
        genero,
        descripcion,
        fotoCaratula,
        fotoPortada,
        trailer
        
      );
    }

    $formAgregarPelicula.reset();

    $inputTitulo.classList.remove("is-valid", "is-invalid");
    $inputGenero.classList.remove("is-valid", "is-invalid");
    $inputDescripcion.classList.remove("is-valid", "is-invalid");
    $inputFotoCaratula.classList.remove("is-valid", "is-invalid");
    $inputFotoPortada.classList.remove("is-valid", "is-invalid");
    $inputTrailer.classList.remove("is-valid", "is-invalid");

    cargarTabla();

    let mensaje;
    if (estaEditado() === true) {
      mensaje = `${titulo} se ha editado correctamente`;
      console.log;
    } else {
      mensaje = `${titulo} se ha cargado correctamente`;
    }

    swal.fire({
      title: "Exito",
      text: mensaje,
      icon: "success",
      showConfirmButton: true,
      confirmButtonText: "ok",
      showCancelButton: false,
    });
  }
  //muestro la tabla
});
