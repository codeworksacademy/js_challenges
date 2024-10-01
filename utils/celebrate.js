function celebrate() {
  // Create and style the canvas element
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Prevent scrolling
  document.body.style.overflow = 'hidden';

  const ctx = canvas.getContext('2d');
  const confettiCount = 100;
  const confettiPieces = [];

  // Create confetti pieces with random properties
  for (let i = 0; i < confettiCount; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 5 + 2;
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 10 + 5,
      color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
      speedX: Math.cos(angle) * speed,
      speedY: Math.sin(angle) * speed,
      opacity: 1,
    });
  }

  const animationDuration = 3000; // 3 seconds
  const animationStartTime = Date.now();
  const gravity = 0.05;

  function animateConfetti() {
    const elapsedTime = Date.now() - animationStartTime;
    const progress = elapsedTime / animationDuration;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw and update each confetti piece
    confettiPieces.forEach(piece => {
      piece.x += piece.speedX;
      piece.y += piece.speedY;
      piece.speedY += gravity; // Apply gravity
      piece.opacity = 1 - progress; // Reduce opacity

      ctx.fillStyle = piece.color;
      ctx.globalAlpha = piece.opacity;
      ctx.beginPath();
      ctx.arc(piece.x, piece.y, piece.size / 2, 0, 2 * Math.PI);
      ctx.fill();
    });

    if (progress < 1) {
      requestAnimationFrame(animateConfetti);
    } else {
      // Remove the canvas and restore scrolling
      document.body.removeChild(canvas);
      document.body.style.overflow = '';
    }
  }

  animateConfetti();
}