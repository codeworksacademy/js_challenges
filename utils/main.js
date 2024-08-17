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
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
  };

  function shoot() {
    // @ts-ignore
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 1.2,
      shapes: ["circle", "square"],
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    });

    // @ts-ignore
    confetti({
      ...defaults,
      particleCount: 20,
      scalar: 2,
      shapes: ["emoji"],
      shapeOptions: {
        emoji: {
          value: ["🍌", "🐒", "🦍"],
        },
      },
    });
  }

  const end = Date.now() + 6 * 1000;

  const colors = ["#bd34fe", "#41d1ff"];

  (function frame() {
    // @ts-ignore
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });

    // @ts-ignore
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  setTimeout(shoot, 0);
  setTimeout(shoot, 300);
  setTimeout(shoot, 600);
}