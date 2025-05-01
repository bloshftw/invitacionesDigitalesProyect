// Variables para almacenar la selección
let tipoEvento = '';
let tematica = '';
let componentes = [];
const steps = ['step1', 'step2', 'step3', 'step4'];
let currentStep = 0;

// Inicialización de elementos
document.addEventListener('DOMContentLoaded', function() {
    // Eventos para opciones de tipo de evento
    document.querySelectorAll('#step1 .option-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('#step1 .option-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            tipoEvento = this.getAttribute('data-value');
            document.getElementById('next1').disabled = false;
        });
    });

    // Eventos para opciones de temática
    document.querySelectorAll('#step2 .option-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('#step2 .option-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            tematica = this.getAttribute('data-value');
            document.getElementById('next2').disabled = false;
        });
    });

    // Navegación entre pasos
    document.getElementById('next1').addEventListener('click', () => nextStep());
    document.getElementById('next2').addEventListener('click', () => nextStep());
    document.getElementById('next3').addEventListener('click', () => nextStep());
    document.getElementById('prev2').addEventListener('click', () => prevStep());
    document.getElementById('prev3').addEventListener('click', () => prevStep());
    document.getElementById('prev4').addEventListener('click', () => prevStep());

    // Botón de WhatsApp
    document.getElementById('whatsapp-button').addEventListener('click', function(e) {
        const nombre = document.getElementById('nombre').value.trim();
        
        if (!nombre) {
            e.preventDefault();
            alert('Por favor, ingresa tu nombre para continuar.');
            return;
        }
        
        const email = document.getElementById('email').value.trim();
        
        // Recopilar componentes seleccionados
        componentes = [];
        document.querySelectorAll('input[name="componentes"]:checked').forEach(checkbox => {
            componentes.push(checkbox.value);
        });
        
        // Construir mensaje para WhatsApp
        const mensaje = encodeURIComponent(
            `¡Hola! Me interesa una tarjeta digital con las siguientes características:\n\n` +
            `🎯 *Tipo de evento:* ${tipoEvento}\n` +
            `🎨 *Temática:* ${tematica}\n` +
            `✨ *Componentes seleccionados:* ${componentes.join(', ') || 'Ninguno seleccionado'}\n\n` +
            `Mi nombre es ${nombre}${email ? ` y mi correo es ${email}` : ''}.` +
            `\n¿Podrías ayudarme con más información sobre mi tarjeta personalizada?`
        );
        
        // Ajusta el número de WhatsApp a tu número
        const whatsappURL = `https://wa.me/2657305625?text=${mensaje}`;
        this.href = whatsappURL;
    });
});

// Cambio de pasos
function nextStep() {
    document.getElementById(steps[currentStep]).classList.remove('active');
    currentStep++;
    document.getElementById(steps[currentStep]).classList.add('active');
    updateProgress();
    
    // Si vamos al último paso, actualizamos el resumen
    if (currentStep === 3) {
        updateResumen();
    }
}

function prevStep() {
    document.getElementById(steps[currentStep]).classList.remove('active');
    currentStep--;
    document.getElementById(steps[currentStep]).classList.add('active');
    updateProgress();
}

function updateProgress() {
    const progress = ((currentStep + 1) / steps.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('step-indicator').textContent = `Paso ${currentStep + 1} de ${steps.length}`;
}

function updateResumen() {
    document.getElementById('resumen-evento').textContent = tipoEvento;
    document.getElementById('resumen-tematica').textContent = tematica;
    
    const componentesList = document.getElementById('resumen-componentes');
    componentesList.innerHTML = '';
    
    document.querySelectorAll('input[name="componentes"]:checked').forEach(checkbox => {
        const li = document.createElement('li');
        li.textContent = checkbox.value;
        componentesList.appendChild(li);
    });
    
    if (componentesList.children.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Ningún componente seleccionado';
        componentesList.appendChild(li);
    }
}