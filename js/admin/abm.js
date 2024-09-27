// abm.js
import { obtenerPeliculasLs } from "../utils.js";
import { Pelicula } from "./pelicula.js";

export const agregarPelicula = (
  titulo,
  genero,
  descripcion,
  fotoCaratula,
  fotoPortada,
  linkTrailer
) => {
  const pelicula = new Pelicula(
    titulo,
    genero,
    descripcion,
    fotoCaratula,
    fotoPortada,
    linkTrailer
  );

  // Obtener la lista de películas del localStorage o inicializar como un array vacío
  const peliculas = obtenerPeliculasLs();

  // Agregar la nueva película a la lista
  peliculas.push(pelicula);

  // Guardar la lista de películas actualizada en localStorage
  localStorage.setItem("peliculas", JSON.stringify(peliculas));

  // Para depurar: imprime las películas guardadas
  console.log("Películas guardadas:", peliculas);
};
