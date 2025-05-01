document.addEventListener('DOMContentLoaded', () => {

//Debugging para "Anim" para cargar animaciones

if (typeof anime === 'undefined') {
  console.error('Error: anime.js no está cargado correctamente. Verifica la conexión a internet o la URL del CDN.');
  return; // Salimos de la función si anime.js no está disponible
}

console.log('Iniciando animaciones...'); // Para debug

// Timeline principal - crea una secuencia de animaciones coordinadas
const timeline = anime.timeline({
  easing: 'easeOutExpo',
  complete: function() {
      console.log('Animaciones iniciales completadas');
      // Activamos los eventos de hover una vez completadas las animaciones iniciales
      setupHoverEffects();
  }
});

//Anim

// 1. Primero, animamos los contenedores entrando desde los lados
timeline.add({
  targets: '#option-custom',
  translateX: [-100, 0],
  opacity: [0, 1],
  duration: 800
})
.add({
  targets: '#option-templates',
  translateX: [100, 0],
  opacity: [0, 1],
  duration: 800
}, '-=600') // Comienza un poco antes de que termine la animación anterior

// 2. Luego, animamos los elementos dentro de cada contenedor en secuencia
.add({
  targets: ['#icon-custom', '#title-custom', '#desc-custom', '#btn-custom'],
  opacity: [0, 1],
  translateY: [30, 0],
  delay: anime.stagger(150), // Aplica un retraso escalonado entre cada elemento
  duration: 600
}, '-=400')
.add({
  targets: ['#icon-templates', '#title-templates', '#desc-templates', '#btn-templates'],
  opacity: [0, 1],
  translateY: [30, 0],
  delay: anime.stagger(150),
  duration: 600
}, '-=400');

// Función para configurar los efectos de hover
function setupHoverEffects() {
  // ----- Efectos para los paneles principales -----
  const options = document.querySelectorAll('.option-container');
  
  options.forEach(option => {
      // Variables para guardar las animaciones en curso
      let hoverInAnimation;
      let hoverOutAnimation;
      let iconAnimation;
      
      // Evento al poner el cursor sobre el panel
      option.addEventListener('mouseenter', function() {
          // Cancelamos animaciones previas si existen
          if (hoverOutAnimation) hoverOutAnimation.pause();
          
          // Animación de elevación del panel
          hoverInAnimation = anime({
              targets: this,
              translateY: -10,
              scale: 1.02,
              boxShadow: ['0 4px 6px -1px rgba(0, 0, 0, 0.1)', '0 20px 25px -5px rgba(0, 0, 0, 0.1)'],
              duration: 400,
              easing: 'easeOutCubic'
          });
          
          // Animación del icono con efecto elástico
          const icon = this.querySelector('svg');
          iconAnimation = anime({
              targets: icon,
              scale: 1.15,
              rotate: ['0deg', '5deg', '0deg', '-3deg', '0deg'],
              duration: 600,
              easing: 'easeOutElastic(1.1, 0.6)'
          });
      });
      
      // Evento al quitar el cursor del panel
      option.addEventListener('mouseleave', function() {
          // Cancelamos animaciones previas si existen
          if (hoverInAnimation) hoverInAnimation.pause();
          
          // Animación para volver al estado normal
          hoverOutAnimation = anime({
              targets: this,
              translateY: 0,
              scale: 1,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              duration: 400,
              easing: 'easeOutQuad'
          });
          
          // Animación para restaurar el icono
          const icon = this.querySelector('svg');
          anime({
              targets: icon,
              scale: 1,
              duration: 400,
              easing: 'easeOutQuad'
          });
      });
  });
  
  // ----- Efectos para los botones -----
  const buttons = document.querySelectorAll('a');
  buttons.forEach(button => {
      let buttonAnimation;
      
      button.addEventListener('mouseenter', function(e) {
          // Evitamos propagación para no interferir con la animación del panel
          e.stopPropagation();
          
          buttonAnimation = anime({
              targets: this,
              translateY: -5,
              scale: 1.05,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
              duration: 300,
              easing: 'easeOutQuad'
          });
      });
      
      button.addEventListener('mouseleave', function(e) {
          e.stopPropagation();
          
          anime({
              targets: this,
              translateY: 0,
              scale: 1,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              duration: 300,
              easing: 'easeOutQuad'
          });
      });
      
      // Efecto visual al hacer clic
      button.addEventListener('mousedown', function(e) {
          anime({
              targets: this,
              scale: 0.95,
              duration: 100,
              easing: 'easeInQuad'
          });
      });
      
      button.addEventListener('mouseup', function(e) {
          anime({
              targets: this,
              scale: 1.05,
              duration: 200,
              easing: 'easeOutElastic(1.1, 0.5)'
          });
      });
  });
}

// Función para manejar el ajuste de tamaño de la ventana
function handleResize() {
  // Reiniciamos posiciones y escalas en caso de cambio de tamaño
  anime.set(['.option-container', 'svg', 'a'], {
      translateY: 0,
      translateX: 0,
      scale: 1
  });
  
  // Adaptamos la disposición en dispositivos móviles vs. desktop
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
      // Configuración específica para móviles si es necesario
      console.log('Vista móvil activada');
  } else {
      console.log('Vista desktop activada');
  }
}

// Escuchamos cambios de tamaño de ventana
window.addEventListener('resize', handleResize);

// Llamamos a handleResize una vez para configuración inicial
handleResize();
});

//Anim

  // Swiper para sección hero
  const heroSwiper = new Swiper('.swiper-hero', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    speed: 1000,
  });

  // Swiper continuo
  const swiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
  });

  // Lógica del menú móvil
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  menuBtn.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      setTimeout(() => menu.classList.remove('scale-y-0'), 10);
    } else {
      menu.classList.add('scale-y-0');
      setTimeout(() => menu.classList.add('hidden'), 300);
    }
  });

  // Cerrar menú al hacer clic en un enlace
  const menuLinks = document.querySelectorAll('#menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('scale-y-0');
      setTimeout(() => menu.classList.add('hidden'), 300);
    });
  });

  // Animación del Hero
  const heroText = document.getElementById('hero-text');
  const heroImg = document.getElementById('hero-img');

  if (heroImg) {
    setTimeout(() => {
      heroImg.classList.remove('opacity-0', 'translate-y-10');
    }, 300);
  }

  if (heroText) {
    setTimeout(() => {
      heroText.classList.remove('opacity-0', 'translate-y-10');
    }, 500);
  }

  // Slider de scroll automático
  const slider = document.querySelector('#slider');
  if (slider) {
    setTimeout(function moveSlide() {
      const max = slider.scrollWidth - slider.clientWidth;
      const left = slider.clientWidth;

      if (max === slider.scrollLeft) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left, behavior: 'smooth' });
      }

      setTimeout(moveSlide, 2000);
    }, 2000);
  }


  //Logica de captura de requisitos

  const opciones = document.querySelectorAll('#opciones-tematica > div');
  let seleccionUsuario = null;

  opciones.forEach(opcion => {
    opcion.addEventListener('click', () => {
      opciones.forEach(o => o.classList.remove('opcion-seleccionada'));
      opcion.classList.add('opcion-seleccionada');
      seleccionUsuario = opcion.getAttribute('data-tema');
      console.log('Temática seleccionada:', seleccionUsuario);
    });
  });
