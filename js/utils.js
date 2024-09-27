export const obtenerPeliculasLs = () => {
  return JSON.parse(localStorage.getItem("peliculas")) || [];
};
