import confetti from 'canvas-confetti';

export function fireFullScreenConfetti() {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#FF7A00', '#FF2E4C', '#D900B6', '#7F52FF', '#10B981', '#F59E0B', '#38BDF8'],
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Explosión multicapa en toda la pantalla
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 1.1,
  });
  fire(0.1, {
    spread: 140,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.3,
  });
  fire(0.1, {
    spread: 160,
    startVelocity: 45,
  });

  // Cañones laterales para cubrir toda la pantalla de izquierda a derecha
  confetti({
    particleCount: 80,
    angle: 60,
    spread: 75,
    origin: { x: 0, y: 0.8 },
    colors: defaults.colors,
    zIndex: 9999,
  });

  confetti({
    particleCount: 80,
    angle: 120,
    spread: 75,
    origin: { x: 1, y: 0.8 },
    colors: defaults.colors,
    zIndex: 9999,
  });

  // Lluvia desde la parte superior
  setTimeout(() => {
    confetti({
      particleCount: 100,
      angle: 90,
      spread: 160,
      origin: { x: 0.5, y: 0.2 },
      startVelocity: 30,
      colors: defaults.colors,
      zIndex: 9999,
    });
  }, 150);
}
