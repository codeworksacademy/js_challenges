const CONSOLE_DISPLAYS = {
  pass: 'background: green; color: white;',
  fail: 'background: red; color: white;',
  input: 'background: black; color: yellow;',
  reset: '',
  custom: 'background: cyan; color: black;'
};

const main = document.querySelector('main')
const tables = {}

function newTable(id, ...cols) {
  const table = document.createElement('table')
  table.id = id
  table.innerHTML = `<thead>
  ${cols.map(col => `<th>${col}</th>`).join('')}
  </thead> <tbody></tbody>`
  tables[id] = table
  main.appendChild(table)
  return table
}

function addTableRow(id, ...cols) {
  const table = tables[id]
  const body = table.querySelector('tbody')
  let row = `<tr class="${cols[cols.length - 1] == '✅' ? 'passed' : 'failed'}">
  ${cols.map(c => `<td class="data-${typeof c}"> ${formatData(c)}</td>`).join('')}
  </tr>`
  body.innerHTML += row
}

function drawStats() {
  setTimeout(() => {
    const table = newTable('test-stats',
      'Total Tests',
      'Passed',
      'Failed',
      'Challenge Complete'
    )
    table.classList.add('fixed-table')
    addTableRow('test-stats',
      stats.totalTests,
      stats.passedTests,
      stats.failedTests,
      stats.totalTests === stats.passedTests ? '✅' : '❌'
    )
  }, delay * 110);
}

function formatData(data) {
  if (tables[data]) {
    return `<b class="data-function">${data}</b>`
  }
  if (data == '✅' || data == '❌') {
    return data
  }
  if (data instanceof Error) {
    return `<span class="data-error">${data.name}: ${data.message}</span>`
  }
  if (data === null) {
    return `<span class="data-null">${data}</span>`
  }
  if (data === undefined) {
    return `<span class="data-undefined">${data}</span>`
  }
  if (data == Array.isArray(data)) {
    return `<span class="data-array">${JSON.stringify(data)}</span>`
  }
  if (typeof data == 'object') {
    return JSON.stringify(data)
  }
  if (typeof data == 'string') {
    return `'${data}'`
  }
  return data
}

let delay = 0
function drawResult(result) {
  setTimeout(() => {
    const table = tables[result.challenge] ?? newTable(result.challenge, ...Object.keys(result))
    addTableRow(result.challenge, ...Object.values(result))
  }, 100 * delay)
  delay++
}



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


let stats = {
  failedTests: 0,
  passedTests: 0,
  totalTests: 0,
  reset: () => {
    stats.failedTests =
      stats.passedTests =
      stats.totalTests = 0
  }
}

function argumon(func) {
  return (func + '')
    .replace(/[/][/].*$/mg, '') // strip single-line comments
    .replace(/\s+/g, '') // strip white space
    .replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments  
    .split('){', 1)[0].replace(/^[^(]*[(]/, '') // extract the parameters  
    .replace(/=[^,]+/g, '') // strip any ES6 defaults  
    .split(',').filter(Boolean); // split & filter [""]
}


async function testYield() {
  let testResults = {}
  const testing = testSuite(doTest)
  let running = true
  while (running) {
    let testResult = (await testing.next()).value
    if (testResult === 'TEST:END') {
      running = false
      break
    }
    testResults[testResult.challenge] ??= []
    testResults[testResult.challenge].push(testResult)
  }
  for (let fn in testResults) {
    console.table(testResults[fn])
  }
}

async function doTest(fn, expected, ...args) {
  try {
    const testResult = await fn(...args)
    stats.totalTests++

    if (testResult === expected) {
      stats.passedTests++
    }

    if (testResult !== expected) {
      stats.failedTests++
    }

    const params = argumon(fn)
    let result = {}
    params.forEach((p, i) => {
      result[p] = args[i]
    })
    result = {
      challenge: fn.name,
      ...result,
      returned: testResult,
      expected,
      passed: testResult === expected ? '✅' : '❌'
    }
    drawResult(result)
    return result
  } catch (error) {
    console.error(`ERROR in: ${fn.name} with arguments: `, JSON.stringify(args))
    throw error
  }
}

async function runTests() {
  try {
    stats.reset()
    await testYield()
    if (stats.passedTests == stats.totalTests) {
      setTimeout(celebrate, delay * 110)
      // Handle post requests for stats
    }
    drawStats()
    // logTestStats(stats)
  } catch (e) {
    console.error(e)
  }
}

let runCount = 0


async function start() {
  await runTests()
}

setTimeout(start, 1000)

