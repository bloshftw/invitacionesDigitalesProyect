function confirmarAsistencia() {
    const nombre = document.getElementById("nombre").value;
    const acomp = document.getElementById("acompanantes").value || 0;
    const mensaje = `Hola, soy ${nombre}. Confirmo mi asistencia al evento con ${acomp} ${acomp == 1 ? 'persona' : 'personas'} de acompañantes.`;
    const url = `https://wa.me/5492657305625?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  }