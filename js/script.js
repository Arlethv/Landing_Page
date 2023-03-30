(function() {
  'use strict';
  window.addEventListener('load', function() {

    var forms = document.getElementsByClassName('needs-validation');

    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);

      form.querySelector('#nombre-completo').addEventListener('input', function(event) {
        validarNombreCompleto(event.target);
      });

    });
  }, false);

  // Función de validación para el campo de nombre completo
  function validarNombreCompleto(input) {
    var regex = /^[a-zA-Z\s]*$/;
    if (regex.test(input.value)) {
      input.setCustomValidity('');
    } else {
      input.setCustomValidity('Por favor ingresa solo letras en el campo de nombre completo.');
    }
  }

})();










