/**
 * Descripción: Este archivo contiene el código JavaScript que controla 
 * el envío de un formulario de contacto en una página web.
 * Autor: Yoselyn
 * Version: 2.0
 */

// Selección de elementos del DOM
const form = document.querySelector('.formulario_contacto');
const loadingMessage = document.querySelector('.loading');
const errorMessage = document.querySelector('.error-message');
const sentMessage = document.querySelector('.sent-message');

// Event listener para el envío del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtención de los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const mensaje = document.getElementById('mensaje').value;
  const terminos = document.getElementById('condiciones').checked;

  // Ocultar mensajes anteriores
  errorMessage.style.display = 'none';
  sentMessage.style.display = 'none';

  // Mostrar mensaje de carga
  loadingMessage.style.display = 'block';

  // Simulación de envío del formulario (aquí debes agregar tu lógica para enviar los datos)
  setTimeout(function() {
    // Ocultar mensaje de carga
    loadingMessage.style.display = 'none';

    // Mostrar mensaje de envío exitoso
    sentMessage.style.display = 'block';

    // Restablecer los campos del formulario
    form.reset();

    // Recargar la página después de 2 segundos
    setTimeout(function() {
      location.reload();
    }, 2000);

  }, 3000);
});
