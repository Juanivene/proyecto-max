import { obtenerPeliculasLs } from "../utils.js";
import { cargarImg, destacarPelicula, manejoCarrusel } from "./utils.js";

export const cargarPelicula = () => {
  const peliculas = obtenerPeliculasLs();

  peliculas.forEach((pelicula) => {
    cargarImg(pelicula);
  });
};

cargarPelicula();

const idPelicula = sessionStorage.getItem("idPelicula");
if (idPelicula) {
  destacarPelicula();
}
if (window.innerWidth < 800) {
  manejoCarrusel(175);
} else {
  manejoCarrusel(90);
}
