import { testSuite } from './testSuite.js'
import { hints, solution } from './hints.js'
import { CONSOLE_DISPLAYS, logCustom, logFail, logInput, logPass, logTestStats } from './logger.js'
import { saveState, getState } from './store.js'


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
    // saves count of runs to local json
    let runCount = await getState('runCount')
    await saveState('runCount', runCount + 1)

    testSuite(test, challenge)
    if (stats.passedTests == stats.totalTests) {
      await saveState('challengeComplete', true)
      logPass('ALL TESTS PASSED!!!')
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

async function printHints() {
  if (!disableHints) { // increments given hints based on run count
    let hintsUsed = await getState('hintsUsed') || 0
    let runCount = await getState('runCount') || 0
    if (runCount % hintsOn == 0 && runCount) {
      await saveState('hintsUsed', ++hintsUsed)
    }

    for (let h = 0; h < hintsUsed && h < hints.length; h++) {
      let hint = hints[h]
      console.log('\x1b[40m ❔ \x1b[40m\x1b[33m',
        hint,
        CONSOLE_DISPLAYS.reset)
    }
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
  await printHints()
  printSolution()
  await runTests()
}
start()

s