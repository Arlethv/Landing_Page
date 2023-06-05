
 // Obtener los elementos necesarios del DOM

const cuadrados = document.querySelectorAll('.cuadrado_beneficios_horizontal');
const anteriorBtn = document.querySelector('.anterior');
const siguienteBtn = document.querySelector('.siguiente');

const carrusel = document.querySelector('.carrusel_horizontal');
if (carrusel !== null) {
  const carruselWidth = carrusel.offsetWidth;
}



// Establecer el índice del cuadrado actual
let indiceCuadrado = 0;

// Agregar evento click al botón "Anterior"
anteriorBtn.addEventListener('click', () => {
  if (indiceCuadrado > 0) {
    indiceCuadrado--;
    carrusel.style.transform = `translateX(${-carruselWidth / 3 * indiceCuadrado}px)`;
  }
});

// Agregar evento click al botón "Siguiente"
siguienteBtn.addEventListener('click', () => {
  if (indiceCuadrado < cuadrados.length - 1) {
    indiceCuadrado++;
    carrusel.style.transform = `translateX(${-carruselWidth / 3 * indiceCuadrado}px)`;
  }
});
