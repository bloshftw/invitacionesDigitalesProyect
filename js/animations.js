document.addEventListener('DOMContentLoaded', function() {
    // Configuración de GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Elementos a animar
    const fadeElements = document.querySelectorAll('.feature-card');
    const featurePoints = document.querySelectorAll('.feature-point');
    const heading = document.querySelector('#como-funciona h2');
    const description = document.querySelector('#como-funciona p');
    
    // Animación del título y descripción
    gsap.from(heading, {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
            trigger: heading,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }
    });
    
    gsap.from(description, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
            trigger: description,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }
    });
    
    // Animación de las tarjetas de características
    fadeElements.forEach((element, index) => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: 0.2 * index,
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none none"
            }
        });
    });
    
    // Animación de los puntos de características
    featurePoints.forEach((point, index) => {
        gsap.from(point, {
            opacity: 0,
            x: -30,
            duration: 0.5,
            delay: 0.2 * index,
            scrollTrigger: {
                trigger: point,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none none"
            }
        });
    });
    

    
    // Animación de blobs
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob) => {
        gsap.to(blob, {
            x: gsap.utils.random(-20, 20),
            y: gsap.utils.random(-20, 20),
            duration: gsap.utils.random(5, 10),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });
    
    // Efecto de hover en las tarjetas de características
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this.querySelector('.icon-container'), {
                y: -5,
                rotation: 5,
                duration: 0.3
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this.querySelector('.icon-container'), {
                y: 0,
                rotation: 0,
                duration: 0.3
            });
        }); 
    });
});

   
