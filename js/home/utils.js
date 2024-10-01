import { obtenerPeliculasLs } from "../utils.js";

export const cargarImg = (pelicula) => {

  const $button = document.createElement("button");
  $button.classList.add("pelicula-btn");

  const img = document.createElement("img");
  img.src = pelicula.fotoCaratula; 
  img.alt = pelicula.titulo;
  img.classList.add("img-pelicula");

  $button.appendChild(img);

  
  $button.addEventListener("click", () => {
    window.location.href = `../../pelicula.html?id=${pelicula.id}`;
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
export const manejoCarrusel = (itemWidth) => {
  {
    document.querySelectorAll(".carousel-container").forEach((container) => {
      const prevButton = container.querySelector(".prev");
      const nextButton = container.querySelector(".next");
      const innerContainer = container.querySelector("div"); // Contenedor de imágenes
      let scrollAmount = 0; // Cantidad de desplazamiento actual

      // Cambia esta variable según el ancho de cada elemento
      // Ancho de cada imagen o elemento del carrusel (ajústalo según tu diseño)

      // Obtiene el número total de elementos (asumiendo que son hijos directos de innerContainer)
      const totalItems = innerContainer.children.length;

      // Calcula el ancho total de todos los elementos
      const totalWidth = totalItems * itemWidth;

      nextButton.addEventListener("click", () => {
        // Verifica si el desplazamiento no excede el ancho total
        if (scrollAmount < totalWidth - itemWidth) {
          scrollAmount += itemWidth; // Desplaza a la derecha
          innerContainer.style.transform = `translateX(-${scrollAmount}px)`;
        }
      });

      prevButton.addEventListener("click", () => {
        // Asegúrate de no permitir desplazamientos negativos
        if (scrollAmount > 0) {
          scrollAmount -= itemWidth; // Desplaza a la izquierda
          innerContainer.style.transform = `translateX(-${scrollAmount}px)`;
        }
      });
    });
  }
};
