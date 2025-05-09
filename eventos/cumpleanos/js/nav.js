document.addEventListener('DOMContentLoaded', () => {

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
});
