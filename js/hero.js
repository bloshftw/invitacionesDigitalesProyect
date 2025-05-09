 // Confetti Effect
 (function() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas to hero section size
    function resizeCanvas() {
      const heroSection = canvas.parentElement;
      canvas.width = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create confetti pieces
    const confettiCount = 100;
    const confetti = [];
    
    const colors = [
      "#FF5252", // Rojo coral
  "#FFD740", // Amarillo ámbar
  "#64FFDA", // Turquesa menta
  "#8C9EFF", // Azul índigo
  "#FF80AB", // Rosa frambuesa
    ];
    
    for (let i = 0; i < confettiCount; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * -1 - 100, // Start above the screen
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 1,
        angle: Math.random() * 2 * Math.PI,
        rotation: Math.random() * 2 * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
      });
    }
    
    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      confetti.forEach((piece, index) => {
        // Update position
        piece.y += piece.speed;
        piece.x += Math.sin(piece.angle) * 0.5;
        piece.rotation += piece.rotationSpeed;
        
        // Draw confetti
        ctx.save();
        ctx.translate(piece.x, piece.y);
        ctx.rotate(piece.rotation);
        
        ctx.fillStyle = piece.color;
        ctx.fillRect(-piece.size / 2, -piece.size / 4, piece.size, piece.size / 2);
        
        ctx.restore();
        
        // Reset if off screen
        if (piece.y > canvas.height) {
          piece.y = -100;
          piece.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
  })();