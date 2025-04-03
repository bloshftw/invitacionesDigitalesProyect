document.addEventListener('DOMContentLoaded', () => {
    // Lógica del menú móvil
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  
    // Animación de la sección Hero
    const heroText = document.getElementById('hero-text');
    const heroImg = document.getElementById('hero-img');
    setTimeout(() => {
      heroImg.classList.remove('opacity-0', 'translate-y-10');
    }, 300);
    setTimeout(() => {
      heroText.classList.remove('opacity-0', 'translate-y-10');
    }, 500);
  });