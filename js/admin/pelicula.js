export class Pelicula {
  constructor(
    titulo,
    genero,
    descripcion,
    fotoCaratula,
    fotoPortada,
    linkTrailer,
    tipo,
    estaPublicada
  ) {
    this.id = window.self.crypto.randomUUID();
    this.titulo = titulo;
    this.genero = genero;
    this.descripcion = descripcion;
    this.fotoCaratula = fotoCaratula;
    this.fotoPortada = fotoPortada;
    this.linkTrailer = linkTrailer;
    this.tipo = tipo;
    this.estaPublicada = estaPublicada;
  }
}
