// Inicializar Swiper
    const swiper = new Swiper('.hero-swiper', {
      loop: true,
      speed: 800,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    // Crear efecto de confeti para decoración
    function createConfetti() {
      const container = document.getElementById('confetti-container');
      const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF6FB5'];
      
      for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 8 + 5 + 'px';
        confetti.style.height = Math.random() * 8 + 5 + 'px';
        confetti.style.opacity = Math.random() * 0.7 + 0.3;
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        confetti.style.animation = 'float ' + (Math.random() * 3 + 2) + 's ease-in-out infinite';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(confetti);
      }
    }
    
    // Función para ajustar la estructura responsiva
    function adjustResponsiveLayout() {
      const featuresContainer = document.querySelector('.features-container');
      const windowWidth = window.innerWidth;
      
      if (windowWidth <= 640) {
        // En móviles, mover las características fuera del hero
        document.querySelector('section').after(featuresContainer);
      } else {
        // En escritorio, mantener dentro del hero
        document.querySelector('.hero-swiper').after(featuresContainer);
      }
      
      // Ajustar altura del hero según el dispositivo
      const heroSlides = document.querySelectorAll('.hero-slide');
      
      heroSlides.forEach(slide => {
        if (windowWidth <= 480) {
          // Móvil pequeño
          slide.style.height = '400px';
        } else if (windowWidth <= 768) {
          // Móvil/Tablet
          slide.style.height = '500px';
        } else if (windowWidth <= 1024) {
          // Tablet/Desktop pequeño
          slide.style.height = '550px';
        } else {
          // Desktop
          slide.style.height = '600px';
        }
      });
    }
    
    // Cargar confeti y ajustar layout responsivo
    window.addEventListener('load', function() {
      createConfetti();
      adjustResponsiveLayout();
    });
    
    // Ajustar layout al cambiar tamaño
    window.addEventListener('resize', adjustResponsiveLayout);