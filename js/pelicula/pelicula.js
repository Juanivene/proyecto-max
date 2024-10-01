import { obtenerPeliculasLs } from "../utils.js";

const id = new URL(window.location.href).searchParams.get("id");



const mostrarPeliculaSeleccionada = () => {
  const $conteinerGeneral = document.getElementById("conteiner");
  $conteinerGeneral.innerText = "";

  const peliculas = obtenerPeliculasLs();

  const posicionPelicula = peliculas.findIndex((pelicula) => {
    return pelicula.id === id;
  });

  if (posicionPelicula != -1) {
    const peliculaDestacada = peliculas[posicionPelicula];

    const titulo = peliculaDestacada.titulo;
    const descripcion = peliculaDestacada.descripcion;
    const video = peliculaDestacada.linkTrailer;

    const $titulo = document.createElement("h1");
    $titulo.innerText = titulo;
    const $descripcion = document.createElement("p");
    $descripcion.innerText = descripcion;
    const $video = document.createElement("iframe");
    $video.width = "560";
    $video.height = "315";
    $video.src = `https://www.youtube.com/embed/${video}`; // Reemplaza VIDEO_ID con el ID real del video
    $video.title = "YouTube video player";
    $video.frameBorder = "1";
    $video.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    $video.allowFullscreen = true;

    $titulo.classList.add("titulo");
    $descripcion.classList.add("descripcion");
    $video.classList.add("video");

    $conteinerGeneral.appendChild($titulo);
    $conteinerGeneral.appendChild($video);
    $conteinerGeneral.appendChild($descripcion);
  }
};
mostrarPeliculaSeleccionada();
