//email
export const validateEmail = (campo, use = true) => {
  //no nulo
  if (!campo || !campo.value.trim()) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  //long
  if (campo.value.trim().length < 5 && campo.value.trim().length > 35) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  //que sea mail
  const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(campo.value)) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  if (use === true) {
    campo.classList.add("is-valid");
  }
  campo.classList.remove("is-invalid");
  return true;
};

//numero
export const validateNumber = (campo) => {
  //no nulo
  if (!campo || !campo.value.trim()) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  //long minima
  if (campo.value.trim().length != 8) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  //que sean numeros
  const regex = /^\d{8}$/;
  if (!regex.test(campo.value)) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;
};

//contraseña
export const validatePassword = (campo) => {
  //no nulo
  if (!campo || !campo.value.trim()) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  return true;
};
//coincidencia en registro
export const validatePasswords = (campo1, campo2) => {
  if (campo1.value != campo2.value) {
    campo1.classList.add("is-invalid");
    campo1.classList.remove("is-valid");
    campo2.classList.add("is-invalid");
    campo2.classList.remove("is-valid");
    return false;
  }
  campo1.classList.remove("is-invalid");
  campo1.classList.add("is-valid");
  campo2.classList.remove("is-invalid");
  campo2.classList.add("is-valid");
  return true;
};
//credenciales admin
export const validateAdmin = (email, contraseña) => {
  if (email.value != "juani@gmail.com" || contraseña.value != "1234") {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    contraseña.classList.add("is-invalid");
    contraseña.classList.remove("is-valid");
    return false;
  }
  email.classList.remove("is-invalid");
  email.classList.add("is-valid");
  contraseña.classList.remove("is-invalid");
  contraseña.classList.add("is-valid");
  return true;
};

//<--validaciones del abm-->
//foto
export const validateFoto = (campo) => {
  //no nulo
  if (!campo || !campo.value.trim()) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  //long minima
  if (campo.value.trim().length < 3) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  //que sea foto
  const regex =/https?:\/\/.*\.(?:png|jpg|jpeg|gif)/

  if (!regex.test(campo.value)) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;
};

//trailer

export const validateVideo = (campo) => {
  //no nulo
  if (!campo || !campo.value.trim()) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  //long minima
  if (campo.value.trim().length < 3) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  //que sea video
  const regex =/^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/

  if (!regex.test(campo.value)) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;
};

//titulo
export const validateTitulo = (campo) => {
  //no nulo
  if (!campo || !campo.value.trim()) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }

  //long maxima
  if (campo.value.trim().length > 25) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;
};

//genero
export const validateGenero = (campo) => {
  //no nulo
  if (!campo || !campo.value.trim()) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  //long maxima
  if (campo.value.trim().length > 25) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  //que sean letras
  const regex = /^[a-zA-Z\s]+$/;
  if (!regex.test(campo.value)) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    return false;
  }
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;
};

//descripcion
export const validateDescripcion = (campo) => {
  //no nulo

  if (!campo || !campo.value.trim()) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    
    return false;
  }

  //long minima
  if (campo.value.trim().length < 10) {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
    
    return false;
  }
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");
  return true;
};
