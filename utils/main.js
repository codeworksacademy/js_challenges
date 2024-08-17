const CONSOLE_DISPLAYS = {
  pass: 'background: green; color: white;',
  fail: 'background: red; color: white;',
  input: 'background: black; color: yellow;',
  reset: '',
  custom: 'background: cyan; color: black;'
};

function logPass() {
  console.log(
    '%c ✅',
    CONSOLE_DISPLAYS.pass,
    ...arguments,
    CONSOLE_DISPLAYS.reset
  );
}

function logFail() {
  console.log(
    '%c X got:',
    CONSOLE_DISPLAYS.fail,
    ...arguments,
    CONSOLE_DISPLAYS.reset
  );
}

function logInput() {
  console.log(
    '%c 🧪',
    CONSOLE_DISPLAYS.input,
    ...arguments,
    CONSOLE_DISPLAYS.reset
  );
}

function logCustom() {
  console.log(
    '%c [👾] --- CUSTOM INPUT ---',
    CONSOLE_DISPLAYS.custom,
    ...arguments,
    CONSOLE_DISPLAYS.reset
  );
}

function logTestStats(stats) {
  console.log(
    '\n-------------------------------\n' +
    '%c 🧪 %c: %c' + stats.totalTests + ' ' +
    '%c ✅ %c: %c' + stats.passedTests + ' ' +
    '%c X %c: %c' + stats.failedTests,
    'background: black; color: yellow;', '', 'color: yellow;',
    'background: green; color: white;', '', 'color: green;',
    'background: red; color: white;', '', 'color: red;'
  );
}


const hintsOn = 3
let stats = {
  failedTests: 0,
  passedTests: 0,
  totalTests: 0
}

function test(actual, expected, input) {

  if (expected === null) {
    logCustom(actual)
    return actual
  }

  stats.totalTests++

  if (typeof actual === 'object') {
    actual = JSON.stringify(actual)
  }

  if (typeof expected == 'object') {
    expected = JSON.stringify(expected)
  }

  // @ts-ignore
  if (window.showInput) {
    logInput(input)
  }

  if (actual === expected) {
    logPass(actual)
    stats.passedTests++
    return actual
  }

  stats.failedTests++
  if (actual == undefined) {
    logFail(actual, '| does your function return something?')
    return actual
  } else {
    logFail(actual, '| expected ', expected)
    return actual
  }
}

async function runTests() {
  stats = {
    failedTests: 0,
    passedTests: 0,
    totalTests: 0
  }

  try {
    testSuite(test, challenge)
    if (stats.passedTests == stats.totalTests) {
      logPass('ALL TESTS PASSED!!!')
      celebrate()
    }
    logTestStats(stats)
  } catch (e) {
    console.log(e)
  }
}

let hintsUsed = 0
let runCount = 0
async function printHints() {
  // @ts-ignore
  if (!window.disableHints) {
    if (runCount % hintsOn == 0 && runCount) {
      hintsUsed++
    }

    for (let h = 0; h < hintsUsed && h < hints.length; h++) {
      let hint = hints[h]
      console.log('❔',
        hint,
        CONSOLE_DISPLAYS.reset)
    }
  }
}

function printSolution() {
  // @ts-ignore
  if (window.showSolution) {
    console.log('---- 🤖 SOLUTION ---- ')
    console.log(solution)
    console.log(CONSOLE_DISPLAYS.reset)
  }
}

async function start() {
  await printHints()
  printSolution()
  await runTests()
}

setTimeout(start, 1000)

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
      opacity: 1
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