export class Pelicula {
  constructor(
    titulo,
    genero,
    descripcion,
    fotoCaratula,
    fotoPortada,
    linkTrailer,
    
  ) {
    this.id = window.self.crypto.randomUUID();
    this.titulo = titulo;
    this.genero = genero;
    this.descripcion = descripcion;
    this.fotoCaratula = fotoCaratula;
    this.fotoPortada = fotoPortada;
    this.linkTrailer = linkTrailer;
    
  }
}
