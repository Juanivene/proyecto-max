export const obtenerPeliculasLs = () => {
  return JSON.parse(localStorage.getItem("peliculas")) || [];
};
export const estaEditado = () => {

  const id = sessionStorage.getItem("idPelicula");
  if (id) {
    return true;
  }
  return false;
};
