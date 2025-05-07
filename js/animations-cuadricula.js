document.addEventListener('DOMContentLoaded', function() {
    // Función para animar la entrada con fade in
    function fadeIn(element, delay = 0, duration = 1000) {
        setTimeout(() => {
            let opacity = 0;
            const interval = 10;
            const delta = interval / duration;
            
            function increaseOpacity() {
                opacity += delta;
                element.style.opacity = opacity;
                element.style.transform = `translateY(${20 - (opacity * 20)}px)`;
                
                if (opacity < 1) {
                    requestAnimationFrame(increaseOpacity);
                } else {
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                }
            }
            
            requestAnimationFrame(increaseOpacity);
        }, delay);
    }
    
    // Animar el encabezado
    fadeIn(document.getElementById('section-header'), 100);
    
    // Animar las tarjetas de eventos con un retraso escalonado
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach((card, index) => {
        fadeIn(card, 300 + (index * 100));
        
        // Añadir efecto de elevación al hover
        card.addEventListener('mouseenter', function() {
            this.querySelector('div').style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('div').style.transform = 'translateY(0)';
        });
    });
    
    // Animar el CTA
    fadeIn(document.getElementById('cta-section'), 1200);
    
    // Definir diferentes tipos de animaciones para los iconos
    const animationTypes = [
        // Pulso
        function pulse(icon) {
            let scale = 1;
            let growing = false;
            
            function animate() {
                if (growing) {
                    scale += 0.01;
                    if (scale >= 1.2) growing = false;
                } else {
                    scale -= 0.01;
                    if (scale <= 0.8) growing = true;
                }
                
                icon.style.transform = `scale(${scale})`;
                icon.animationId = requestAnimationFrame(animate);
            }
            
            icon.animationId = requestAnimationFrame(animate);
        },
        
        // Rotación
        function rotate(icon) {
            let rotation = 0;
            
            function animate() {
                rotation += 1;
                if (rotation >= 360) rotation = 0;
                
                icon.style.transform = `rotate(${rotation}deg)`;
                icon.animationId = requestAnimationFrame(animate);
            }
            
            icon.animationId = requestAnimationFrame(animate);
        },
        
        // Rebote
        function bounce(icon) {
            let position = 0;
            let goingUp = true;
            
            function animate() {
                if (goingUp) {
                    position -= 0.5;
                    if (position <= -10) goingUp = false;
                } else {
                    position += 0.5;
                    if (position >= 0) goingUp = true;
                }
                
                icon.style.transform = `translateY(${position}px)`;
                icon.animationId = requestAnimationFrame(animate);
            }
            
            icon.animationId = requestAnimationFrame(animate);
        },
        
        // Wiggle (movimiento lateral)
        function wiggle(icon) {
            let angle = 0;
            let direction = 1;
            
            function animate() {
                angle += (0.5 * direction);
                if (angle >= 3) direction = -1;
                if (angle <= -3) direction = 1;
                
                icon.style.transform = `rotate(${angle}deg)`;
                icon.animationId = requestAnimationFrame(animate);
            }
            
            icon.animationId = requestAnimationFrame(animate);
        },
        
        // Float (flotación suave)
        function float(icon) {
            let floatPos = 0;
            let floatUp = true;
            
            function animate() {
                if (floatUp) {
                    floatPos -= 0.2;
                    if (floatPos <= -5) floatUp = false;
                } else {
                    floatPos += 0.2;
                    if (floatPos >= 5) floatUp = true;
                }
                
                icon.style.transform = `translateY(${floatPos}px)`;
                icon.animationId = requestAnimationFrame(animate);
            }
            
            icon.animationId = requestAnimationFrame(animate);
        },
        
        // Latido (heartbeat)
        function heartbeat(icon) {
            let time = 0;
            const period = 100;
            
            function animate() {
                time += 1;
                let scale = 1;
                
                if (time % period < period * 0.1) {
                    scale = 1 + (time % period) / (period * 0.1) * 0.3;
                } else if (time % period < period * 0.2) {
                    scale = 1.3 - ((time % period) - period * 0.1) / (period * 0.1) * 0.2;
                } else if (time % period < period * 0.3) {
                    scale = 1.1 + ((time % period) - period * 0.2) / (period * 0.1) * 0.1;
                } else if (time % period < period * 0.4) {
                    scale = 1.2 - ((time % period) - period * 0.3) / (period * 0.1) * 0.2;
                } else {
                    scale = 1;
                }
                
                icon.style.transform = `scale(${scale})`;
                icon.animationId = requestAnimationFrame(animate);
            }
            
            icon.animationId = requestAnimationFrame(animate);
        },
        
        // Shake (temblor)
        function shake(icon) {
            let time = 0;
            const period = 120;
            
            function animate() {
                time += 1;
                let translateX = 0;
                
                if (time % period < period * 0.7) {
                    translateX = Math.sin(time * 0.5) * 3;
                }
                
                icon.style.transform = `translateX(${translateX}px)`;
                icon.animationId = requestAnimationFrame(animate);
            }
            
            icon.animationId = requestAnimationFrame(animate);
        }
    ];
    
    // Asignar animaciones específicas a cada icono
    const iconAnimations = [
        { id: 'icon-1', animation: animationTypes[5] }, // Heartbeat para bodas
        { id: 'icon-2', animation: animationTypes[2] }, // Bounce para cumpleaños
        { id: 'icon-3', animation: animationTypes[4] }, // Float para baby shower
        { id: 'icon-4', animation: animationTypes[1] }, // Rotate para graduación
        { id: 'icon-5', animation: animationTypes[0] }, // Pulse para corporativo
        { id: 'icon-6', animation: animationTypes[3] }, // Wiggle para aniversario
        { id: 'icon-7', animation: animationTypes[6] }, // Shake para despedida
        { id: 'icon-8', animation: animationTypes[4] }  // Float para fiesta temática
    ];
    
    // Iniciar animaciones para los iconos
iconAnimations.forEach(item => {
    const icon = document.getElementById(item.id);
    const card = icon.closest('.event-card');

    // Iniciar animación al cargar la página después de un retraso
    setTimeout(() => {
        item.animation(icon);
    }, 1500);

    
});
    
    // Función para detectar cuando un elemento está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Función para verificar elementos visibles y animar
    function checkVisibility() {
        const eventCards = document.querySelectorAll('.event-card');
        eventCards.forEach(card => {
            if (isInViewport(card) && card.style.opacity < 1) {
                fadeIn(card, 100);
            }
        });
        
        // Verificar el encabezado
        const header = document.getElementById('section-header');
        if (isInViewport(header) && header.style.opacity < 1) {
            fadeIn(header, 100);
        }
        
        // Verificar el CTA
        const cta = document.getElementById('cta-section');
        if (isInViewport(cta) && cta.style.opacity < 1) {
            fadeIn(cta, 100);
        }
    }
    
    // Verificar visibilidad al hacer scroll
    window.addEventListener('scroll', checkVisibility);
    
    // Verificar visibilidad inicial
    checkVisibility();
});