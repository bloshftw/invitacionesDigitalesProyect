document.addEventListener('DOMContentLoaded', () => {

  // Inicialización de Swiper
  const swiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0, // sin separación
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

  // ✅ Cerrar menú cuando se hace clic en un enlace
  const menuLinks = document.querySelectorAll('#menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('scale-y-0');
      setTimeout(() => menu.classList.add('hidden'), 300);
    });
  });

  // Animación de entrada del Hero
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

  // Movimiento automático de slider (si existe)
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

});
