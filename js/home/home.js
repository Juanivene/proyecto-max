import { obtenerPeliculasLs } from "../utils.js";

export const cargarPelicula = () => {
  const peliculas = obtenerPeliculasLs();

  peliculas.forEach((pelicula) => {
    cargarImg(pelicula);
  });
};

export const cargarImg = (pelicula) => {
  // Crear el botón que contiene la imagen
  const $button = document.createElement("button");
  $button.classList.add("pelicula-btn");

  // Crear la imagen y agregarla al botón
  const img = document.createElement("img");
  img.src = pelicula.fotoCaratula; // Asegúrate de que el objeto película tenga esta propiedad
  img.alt = pelicula.titulo;
  img.classList.add("img-pelicula");

  $button.appendChild(img);

  // Agregar el evento para redireccionar al hacer clic
  $button.addEventListener("click", () => {
    window.location.href = "../../404.html";
  });

  // Determinar en qué carrusel agregar la película
  let categoriaDiv;

  switch (pelicula.genero) {
    case "humor":
      categoriaDiv = document.getElementById("humor");

      break;
    case "terror":
      categoriaDiv = document.getElementById("terror");

      break;
    case "clasicos":
      categoriaDiv = document.getElementById("clasicos");

      break;
    case "recomendaciones":
      categoriaDiv = document.getElementById("recomendaciones");

      break;
    default:
      console.error("Categoría no válida:", pelicula.genero);
      return; // Si la categoría no es válida, no hacer nada
  }

  // Agregar el botón con la imagen al carrusel adecuado

  categoriaDiv.appendChild($button);
};

cargarPelicula();

export const destacarPelicula = () => {
  const $conteinerGeneral = document.getElementById("imagen_destacada");
  $conteinerGeneral.innerText = "";

  const peliculas = obtenerPeliculasLs();
  const idPelicula = sessionStorage.getItem("idPelicula");
  const posicionPelicula = peliculas.findIndex((pelicula) => {
    return pelicula.id === idPelicula;
  });

  if (posicionPelicula != -1) {
    const peliculaDestacada = peliculas[posicionPelicula];

    const titulo = peliculaDestacada.titulo;
    const descripcion = peliculaDestacada.descripcion;
    const portada = peliculaDestacada.fotoPortada;

    const $conteinerNavegacion = document.createElement("div");
    $conteinerNavegacion.classList.add("navegacion_destacada");
    const $imgDestacada = document.createElement("img");
    $imgDestacada.classList.add("destacada");

    $imgDestacada.src = portada;
    $imgDestacada.alt = titulo;

    const $descripcionDestacada = document.createElement("h3");
    $descripcionDestacada.innerText = descripcion;
    const $buttonIr = document.createElement("a");
    $buttonIr.innerText = "ir a pelicula";
    $buttonIr.href = "../../pelicula.html";

    $conteinerGeneral.appendChild($imgDestacada);
    $conteinerNavegacion.appendChild($descripcionDestacada);
    $conteinerNavegacion.appendChild($buttonIr);

    $conteinerGeneral.appendChild($conteinerNavegacion);
  }
};
const idPelicula = sessionStorage.getItem("idPelicula");
if (idPelicula) {
  destacarPelicula();
}


