import { obtenerPeliculasLs } from "../utils.js";

const cargarPelicula = () => {
  const peliculas = obtenerPeliculasLs();

  peliculas.forEach((pelicula) => {
    cargarImg(pelicula);
  });
};

const cargarImg = (pelicula) => {
  // Crear el botón que contiene la imagen
  const $button = document.createElement("button");
  $button.classList.add("pelicula-btn");

  // Crear la imagen y agregarla al botón
  const img = document.createElement("img");
  img.src = pelicula.fotoCaratula; // Asegúrate de que el objeto película tenga esta propiedad
  img.alt = pelicula.titulo;
  img.classList.add("img-pelicula");

  $button.appendChild(img);
  $button.addEventListener("click", () => {
    window.location.href = `../../pelicula.html?id=${pelicula.id}`;
  });

  let conteiner = document.getElementById("conteiner-peliculas");

  conteiner.appendChild($button);
};
cargarPelicula();

const $formBusqueda = document.getElementById("form-busqueda");
const $inputBusqueda = document.getElementById("input-busqueda");
const $conteiner = document.getElementById("conteiner-peliculas");
const peliculas = obtenerPeliculasLs();
$formBusqueda.addEventListener("submit", (e) => {
  e.preventDefault();

  $conteiner.innerText = "";
  const busueda = $inputBusqueda.value;
  const peliculasFiltradas = peliculas.filter((pelicula) => {
    return pelicula.titulo.toLowerCase().includes(busueda.toLowerCase());
  });
  peliculasFiltradas.forEach((pelicula) => {
    cargarImg(pelicula);
  });
});
