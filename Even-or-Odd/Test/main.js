import { testSuite } from './testSuite.js'
import { hints, solution } from './hints.js'
import { CONSOLE_DISPLAYS, logCustom, logFail, logInput, logPass, logTestStats } from './logger.js'
import { saveState, getState } from './store.js'


let challenge, input, useHints, showSolution, showInput;

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
    if (imported.useHints) useHints = imported.useHints
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

function runTests() {
  stats = {
    failedTests: 0,
    passedTests: 0,
    totalTests: 0
  }

  try {
    // saves count of runs to local json
    let runCount = getState('runCount')
    saveState('runCount', runCount + 1)

    testSuite(test, challenge)
    if (stats.passedTests == stats.totalTests) {
      logPass('ALL TESTS PASSED!!!')
      saveState('challengeComplete', true)
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

function printHints() {
  if (useHints) {
    saveState('usedHints', true)
    hints.forEach(h => {
      console.log('\x1b[40m ❔ \x1b[40m\x1b[33m',
        h,
        CONSOLE_DISPLAYS.reset)
    })
  }
}
function printSolution() {
  if (showSolution) {
    saveState('usedSolution', true)
    console.log('\n\x1b[36m\x1b[40m ---- 🤖 SOLUTION ---- ')
    console.log(solution)
    console.log(CONSOLE_DISPLAYS.reset)
  }
}

async function start() {
  await getImport()
  printHints()
  printSolution()
  runTests()
}

start()