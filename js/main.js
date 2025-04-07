document.addEventListener('DOMContentLoaded', () => {
  //  Lógica del menú móvil
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  //  Animación de entrada del Hero
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

  const slider = document.querySelector('#slider');
    setTimeout(function moveSlide() {
        const max = slider.scrollWidth - slider.clientWidth;
        const left = slider.clientWidth;

        if (max === slider.scrollLeft) {
            slider.scrollTo({left: 0, behavior: 'smooth'})
        } else {
            slider.scrollBy({left, behavior: 'smooth'})
        }

        setTimeout(moveSlide, 2000)
    }, 2000)

});

