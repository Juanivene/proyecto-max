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
};

const cargarFilaTabla = (pelicula, indice) => {
  const $tbody = document.getElementById("tbody-peliculas");
  const $tr = document.createElement("tr");

  //inidce
  const $tdIndice = document.createElement("td");
  $tdIndice.textContent = indice + 1;
  $tr.appendChild($tdIndice);

  //titulo
  const $tdTitulo = document.createElement("td");
  $tdTitulo.textContent = pelicula.titulo;
  $tr.appendChild($tdTitulo);

  //genero
  const $tdGenero = document.createElement("td");
  $tdGenero.textContent = pelicula.genero;
  $tr.appendChild($tdGenero);
  //imagenes
  const $tdCaratula = document.createElement("td");
  const $imgCaratula = document.createElement("img");
  $imgCaratula.src = pelicula.fotoCaratula;
  $imgCaratula.alt = pelicula.titulo;
  $imgCaratula.classList.add("imagen-tabla");
  $tdCaratula.appendChild($imgCaratula);
  $tr.appendChild($tdCaratula);

  const $tdPortada = document.createElement("td");
  const $imgPortada = document.createElement("img");
  $imgPortada.src = pelicula.fotoPortada;
  $imgPortada.alt = pelicula.titulo;
  $imgPortada.classList.add("imagen-tabla");
  $tdPortada.appendChild($imgPortada);
  $tr.appendChild($tdPortada);

  //descripcion
  const $tdDescripcion = document.createElement("td");
  $tdDescripcion.textContent = pelicula.descripcion;
  $tr.appendChild($tdDescripcion);

  //trailer
  const $tdTrailer = document.createElement("td");
  $tdTrailer.textContent = pelicula.linkTrailer;
  $tr.appendChild($tdTrailer);

  //botones
  const $tdBotones = document.createElement("td");

  const $btnNoDestacar = document.createElement("button");
  const $btnDestacar = document.createElement("button");
  const $btnEditar = document.createElement("button");
  const $btnEliminar = document.createElement("button");
  $btnNoDestacar.classList.add(
    "btn",
    "btn-sm",
    "btn-info",
    "mb-1",
    "btn-no-destacar"
  );
  $btnDestacar.classList.add("btn", "btn-sm", "btn-info", "mb-1");
  $btnEditar.classList.add("btn", "btn-sm", "btn-warning", "mb-1");
  $btnEliminar.classList.add("btn", "btn-sm", "btn-danger");
  $btnNoDestacar.textContent = "No destacar";
  $btnDestacar.textContent = "Destacar";
  $btnEditar.textContent = "Editar";
  $btnEliminar.textContent = "Eliminar";

  const idEnSs = sessionStorage.getItem("idPelicula");

  if (pelicula.id === idEnSs) {
    $tdBotones.appendChild($btnNoDestacar);
  } else {
    $tdBotones.appendChild($btnDestacar);
  }

  $tdBotones.appendChild($btnEditar);
  $tdBotones.appendChild($btnEliminar);
  $tr.appendChild($tdBotones);
  //agrego al tbody todos los tr creados
  $tbody.appendChild($tr);

  //botones acciones
  $btnEliminar.onclick = () => {
    eliminarPelicula(pelicula.id, pelicula.titulo);
  };
  $btnEditar.onclick = () => {
    prepararEdicionPelicula(pelicula);
  };
  const idActualDestacado = sessionStorage.getItem("idPelicula");

  $btnDestacar.onclick = () => {
    prepararDestacada(pelicula.id, pelicula.titulo, idActualDestacado);
    $tdBotones.replaceChild($btnNoDestacar, $btnDestacar);
  };
  $btnNoDestacar.onclick = () => {
    sessionStorage.removeItem("idPelicula");

    $tdBotones.replaceChild($btnDestacar, $btnNoDestacar);
  };
};

export const cargarTabla = () => {
  const peliculas = obtenerPeliculasLs();

  const $tbody = document.getElementById("tbody-peliculas");
  $tbody.innerHTML = "";

  peliculas.forEach((pelicula, indice) => {
    cargarFilaTabla(pelicula, indice);
  });
};
export const eliminarPelicula = (idPelicula, tituloPelicula) => {
  swal
    .fire({
      title: "Atencion",
      text: `¿Seguro que quieres eliminar ${tituloPelicula}?`,
      icon: "warning",
      showConfirmButton: true,
      confirmButtonText: "Si",
      showCancelButton: true,
      cancelButtonText: "No",
    })
    .then((resultado) => {
      if (resultado.isConfirmed) {
        const peliculas = obtenerPeliculasLs();
        const peliculasActualizadas = peliculas.filter((pelicula) => {
          return pelicula.id != idPelicula;
        });
        localStorage.setItem(
          "peliculas",
          JSON.stringify(peliculasActualizadas)
        );
        cargarTabla();

        swal.fire({
          title: "Exito",
          text: `${tituloPelicula} se ha eliminado correctamente`,
          icon: "success",
          showConfirmButton: true,
          confirmButtonText: "ok",
          showCancelButton: false,
        });
      }
    });
};

const prepararEdicionPelicula = (pelicula) => {
  const $inputTitulo = document.getElementById("titulo");
  const $inputGenero = document.getElementById("genero");
  const $inputDescripcion = document.getElementById("descripcion");
  const $inputFotoCaratula = document.getElementById("foto_caratula");
  const $inputFotoPortada = document.getElementById("foto_portada");
  const $inputTrailer = document.getElementById("link_trailer");

  $inputTitulo.value = pelicula.titulo;
  $inputGenero.value = pelicula.genero;
  $inputDescripcion.value = pelicula.descripcion;
  $inputFotoCaratula.value = pelicula.fotoCaratula;
  $inputFotoPortada.value = pelicula.fotoPortada;
  $inputTrailer.value = pelicula.linkTrailer;

  sessionStorage.setItem("idPelicula", pelicula.id);

  const $alert = document.getElementById("alert-pelicula-editando");
  const $spanContacto = document.getElementById("nombre-pelicula-editando");
  $alert.classList.remove("d-none");
  $spanContacto.textContent = pelicula.titulo;
};

export const editarPelicula = (
  titulo,
  genero,
  descripcion,
  fotoCaratula,
  fotoPortada,
  trailer
) => {
  const peliculas = obtenerPeliculasLs();
  const idPelicula = sessionStorage.getItem("idPelicula");

  const posicionPelicula = peliculas.findIndex((pelicula) => {
    return pelicula.id === idPelicula;
  });
  if (posicionPelicula === -1) {
    sessionStorage.removeItem(idPelicula);
  }
  const nuevaPelicula = new Pelicula(
    titulo,
    genero,
    descripcion,
    fotoCaratula,
    fotoPortada,
    trailer
  );
  // peliculas.splice(posicionPelicula, 1, nuevaPelicula);
  peliculas[posicionPelicula] = nuevaPelicula;

  localStorage.setItem("peliculas", JSON.stringify(peliculas));
  sessionStorage.removeItem("idPelicula");
  const $alert = document.getElementById("alert-pelicula-editando");
  const $spanContacto = document.getElementById("nombre-pelicula-editando");
  $alert.remove();
  $spanContacto.remove();
};
const prepararDestacada = (idPelicula, tituloPelicula, idActualDestacado) => {
  sessionStorage.removeItem("idPelicula");
  sessionStorage.setItem("idPelicula", idPelicula);
  const peliculas = obtenerPeliculasLs();
  const peliculaDestacadaAnterior = peliculas.find(
    (p) => p.id === idActualDestacado
  );
  

  swal.fire({
    title: "Exito",
    text: `${tituloPelicula} ha sido destacada correctamente`,
    icon: "success",
    showConfirmButton: true,
    confirmButtonText: "Ok",
    showCancelButton: false,
  });
};
