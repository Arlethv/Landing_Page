function validarNombre() {
  const nombreInput = document.getElementById('nombre');
  const nombreFeedbackValid = document.querySelector('.valid-feedback nombre');
  const nombreValido = /^[a-zA-Z]+(\s[a-zA-Z]+)+$/.test(nombreInput.value);
  if (!nombreValido) {
    nombreInput.classList.add('is-invalid');
    nombreInput.classList.remove('is-valid');
    nombreFeedbackValid.style.display = 'none';
  } else {
    nombreInput.classList.remove('is-invalid');
    nombreInput.classList.add('is-valid');
    nombreFeedbackValid.style.display = 'block';
  }
}

function validarEmail() {
  const emailInput = document.getElementById('email');
  const emailFeedbackValid = document.querySelector('.valid-feedback email');
  const emailValido = /^\S+@\S+\.\S+$/.test(emailInput.value);
  if (!emailValido) {
    emailInput.classList.add('is-invalid');
    emailInput.classList.remove('is-valid');
    emailFeedbackValid.style.display = 'none';
  } else {
    emailInput.classList.remove('is-invalid');
    emailInput.classList.add('is-valid');
    emailFeedbackValid.style.display = 'block';
  }
}


function validarTelefono() {
  const telefonoInput = document.getElementById('telefono');
  const telefonoFeedbackValid = document.querySelector('.valid-feedback telefono');
  const telefonoValido = /^[0-9]{7,}$/.test(telefonoInput.value);
  if (!telefonoValido) {
    telefonoInput.classList.add('is-invalid');
    telefonoInput.classList.remove('is-valid');
    telefonoFeedbackValid.style.display = 'none';
  } else {
    telefonoInput.classList.remove('is-invalid');
    telefonoInput.classList.add('is-valid');
    telefonoFeedbackValid.style.display = 'block';
  }
}


function validarTerminos() {
  const terminosDiv = document.querySelector('.terminos');
  const terminosCheckbox = terminosDiv.querySelector('input[type="checkbox"]');
  const terminosFeedback = terminosDiv.querySelector('.invalid-feedback');
  const terminosValidados = terminosCheckbox.checked;
  if (terminosValidados) {
    terminosDiv.classList.remove('is-invalid');
  } else {
    terminosDiv.classList.add('is-invalid');
    terminosFeedback.style.display = 'block';
  }
  return terminosValidados;
}

function validarCamposVacios() {
  const formulario = document.getElementById("form_contacto");
  let nombre = document.getElementById("nombre");
  let correo = document.getElementById("email");
  let telefono = document.getElementById("telefono");
  
  let camposVacios = false;
  
  if (nombre.value === "") {
    nombre.classList.add('is-invalid');
    camposVacios = true;
  } else {
    nombre.classList.remove('is-invalid');
  }
  
  if (correo.value === "") {
    correo.classList.add('is-invalid');
    camposVacios = true;
  } else {
    correo.classList.remove('is-invalid');
  }
  
  if (telefono.value === "") {
    telefono.classList.add('is-invalid');
    camposVacios = true;
  } else {
    telefono.classList.remove('is-invalid');
  }
  
  return camposVacios;
}

function validarFormulario() {
  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const telefonoInput = document.getElementById('telefono');
  const terminosCheckbox = document.getElementById('condiciones');

  let validacionCorrecta = true;

  if (nombreInput.value.trim() === '') {
    nombreInput.classList.add('is-invalid');
    validacionCorrecta = false;
  } else {
    nombreInput.classList.remove('is-invalid');
  }

  if (emailInput.value.trim() === '') {
    emailInput.classList.add('is-invalid');
    validacionCorrecta = false;
  } else {
    emailInput.classList.remove('is-invalid');
  }

  if (telefonoInput.value.trim() === '') {
    telefonoInput.classList.add('is-invalid');
    validacionCorrecta = false;
  } else {
    telefonoInput.classList.remove('is-invalid');
  }

  if (!terminosCheckbox.checked) {
    terminosCheckbox.classList.add('is-invalid');
    validacionCorrecta = false;
  } else {
    terminosCheckbox.classList.remove('is-invalid');
  }

  return validacionCorrecta;
}


const formulario = document.querySelector('.form_contacto');
if (formulario) {
formulario.addEventListener('submit', function(event) {
  // Validar campos del formulario
  const camposVacios = validarCamposVacios();
  const nombreValido = validarNombre();
  const emailValido = validarEmail();
  const telefonoValido = validarTelefono();
  const terminosValidos = validarTerminos();



  // Si algún campo no es válido, detener el envío del formulario
  if ( camposVacios|| !nombreValido || !emailValido || !telefonoValido || !terminosValidos ) {
    event.preventDefault();
  }
});

}
