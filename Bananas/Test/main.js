import { interceptConsole } from './console_interceptor.js';
import { testSuite } from './testSuite.js'
import { hints, solution } from './hints.js'
import { CONSOLE_DISPLAYS, logCustom, logFail, logInput, logPass, logTestStats } from './logger.js'


let challenge, input, disableHints, showSolution, showInput;
const hintsOn = 3
let stats = {
  failedTests: 0,
  passedTests: 0,
  totalTests: 0
}

async function getImport() {
  try {
    let imported = await import('../challenge.js')
    if (imported.challenge) challenge = imported.challenge
    if (imported.input) input = imported.input
    if (imported.showInput) showInput = imported.showInput
    if (imported.disableHints) disableHints = imported.disableHints
    if (imported.showSolution) showSolution = imported.showSolution

  } catch (err) {
    console.error(err)
  }
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

  if (showInput) {
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

  if (input) {
    try {
      console.log({ input })
      let customOutput = challenge.apply(null, [input])
      test(customOutput, null)
    } catch (e) {
      console.error(CONSOLE_DISPLAYS.fail, '[!] ERROR FROM CUSTOM INPUT', input, e, CONSOLE_DISPLAYS.reset)
    }
  }
}

let hintsUsed = 0
let runCount = 0
async function printHints() {
  if (!disableHints) {
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
  if (showSolution) {
    console.log('---- 🤖 SOLUTION ---- ')
    console.log(solution)
    console.log(CONSOLE_DISPLAYS.reset)
  }
}

async function start() {
  interceptConsole()
  await getImport()
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
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 1.2,
      shapes: ["circle", "square"],
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    });

    confetti({
      ...defaults,
      particleCount: 20,
      scalar: 2,
      shapes: ["emoji"],
      shapeOptions: {
        emoji: {
          value: ["🦄", "🌈"],
        },
      },
    });
  }

  const end = Date.now() + 6 * 1000;

  const colors = ["#bd34fe", "#41d1ff"];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });

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

window.celebrate = celebrate