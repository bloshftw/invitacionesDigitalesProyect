document.addEventListener('DOMContentLoaded', () => {


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

  
  
 });
