// funcionalidad de desplazar hacia arriba
const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// Selecciones para Barra de navegación hamburguesa

const burger = document.querySelector("#menu-hamburguesa");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Cerrar el menú de hambuguesa cuando se hace click en un enlace  

// Seleccionar enlaces de navegación
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

document.addEventListener("DOMContentLoaded", function () {
  const habilidadesSection = document.querySelector('.contenedor-habilidades');
  const headerHabilidades = document.querySelector('.header-habilidades');

  const observerOptions = {
      root: null, // Usar la ventana del navegador como raíz
      rootMargin: '0px',
      threshold: 0.1 // 10% del elemento visible para activar el callback
  };

  const observerCallback = (entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              habilidadesSection.classList.remove('disappear');
              habilidadesSection.classList.add('appear');

              headerHabilidades.classList.remove('disappear');
              headerHabilidades.classList.add('appear');
          } else {
              habilidadesSection.classList.remove('appear');
              habilidadesSection.classList.add('disappear');

              headerHabilidades.classList.remove('appear');
              headerHabilidades.classList.add('disappear');
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(habilidadesSection);
});


document.addEventListener("DOMContentLoaded", function () {
  const aboutTitle = document.querySelector('.about-title');
  const cardContainer = document.querySelector('.card-container');

  const observerOptions = {
      root: null, // Usar la ventana del navegador como raíz
      rootMargin: '0px',
      threshold: 0.1 // 10% del elemento visible para activar el callback
  };

  const observerCallback = (entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              aboutTitle.classList.remove('disappear');
              aboutTitle.classList.add('appear');

              cardContainer.classList.remove('disappear');
              cardContainer.classList.add('appear');
          } else {
              aboutTitle.classList.remove('appear');
              aboutTitle.classList.add('disappear');

              cardContainer.classList.remove('appear');
              cardContainer.classList.add('disappear');
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(cardContainer); 
});

document.addEventListener("DOMContentLoaded", function () {
  const projectTitle = document.querySelector('.titulo-principal-proyectos');
  const contenedorProyectos = document.querySelector('.contenedor-de-proyectos');

  const observerOptions = {
      root: null, // Usar la ventana del navegador como raíz
      rootMargin: '0px',
      threshold: 0.1 // 10% del elemento visible para activar el callback
  };

  const observerCallback = (entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              projectTitle.classList.remove('disappear');
              projectTitle.classList.add('appear');

              contenedorProyectos.classList.remove('disappear');
              contenedorProyectos.classList.add('appear');
          } else {
              projectTitle.classList.remove('appear');
              projectTitle.classList.add('disappear');

              contenedorProyectos.classList.remove('appear');
              contenedorProyectos.classList.add('disappear');
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(contenedorProyectos); 
});

document.addEventListener("DOMContentLoaded", function () {
  const contactTitle = document.querySelector('.titulo-contacto');
  const contenedorFormContacto = document.querySelector('.formulario-contacto-contenedor');

  const observerOptions = {
      root: null, // Usar la ventana del navegador como raíz
      rootMargin: '0px',
      threshold: 0.1 // 10% del elemento visible para activar el callback
  };

  const observerCallback = (entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              contactTitle.classList.remove('disappear');
              contactTitle.classList.add('appear');

              contenedorFormContacto.classList.remove('disappear');
              contenedorFormContacto.classList.add('appear');
          } else {
              contactTitle.classList.remove('appear');
              contactTitle.classList.add('disappear');

              contenedorFormContacto.classList.remove('appear');
              contenedorFormContacto.classList.add('disappear');
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(contenedorFormContacto); 
});