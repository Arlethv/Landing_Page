
/**
 * Descripción: Este archivo contiene el código JavaScript que controla 
 * la interactividad y el comportamiento dinámico de la página web.
 * Autor: Yoselyn
 * Version 1.0
 */


(function() {
  "use strict";

  /**
   * Función auxiliar para seleccionar elementos del DOM
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

 /**
 * Función auxiliar para agregar un event listener 
 */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
 * Función para el evento de desplazamiento
 */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

 /**
 * Barra de navegación con enlaces activos durante el desplazamiento
 */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let posicion= window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (posicion>= section.offsetTop && posicion<= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

 /**
 * Animación de desplazamiento hacia un elemento
 */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  let obtenerHeader= select('#header')
  if (obtenerHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        obtenerHeader.classList.add('header-scrolled')
      } else {
        obtenerHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Boton de volver a inicio
   */
  let volver_inicio = select('.flecha-volver')
  if (volver_inicio) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        volver_inicio.classList.add('active')
      } else {
        volver_inicio.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }


  /**
   * desplazamiento en la carga de la página
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

 
  /**
   * Iniciar glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });


  /**
   * beneficios slider en la seccion beneficios
   */
  new Swiper('.beneficios-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   *  Inicialización de la animación en el desplazamiento
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });



})()