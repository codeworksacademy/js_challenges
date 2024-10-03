


function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types



  test(slate.name, 'Slate Slabrock', `slate.name | 'Slate Slabrock'`)
  test(slate.health, 25, `slate.health, 25 | 25`)
  test(slate.maxHealth, 25, `slate.maxHealth | 25`)

  test(swift.name, 'Swift Ironstag', `swift.name | 'Swift Ironstag'`)
  test(swift.exp, 0, `swift.exp | 0`)

  test(slate.healthPercent, 100, `slate.healthPercent | '100'`)
  slate.health -= 10
  test(slate.healthPercent, 60, `slate.healthPercent | '60'`)
  slate.health -= 5
  test(slate.healthPercent, 40, `slate.healthPercent | '40'`)
  slate.health += 12
  test(slate.healthPercent, 88, `slate.healthPercent | '88'`)

  test(swift.level, 1, `swift.level | 1`)
  swift.exp += 49
  test(swift.level, 1, `swift.level | 1`)
  swift.exp += 50
  test(swift.level, 2, `swift.level | 2`)
  swift.exp += 175
  test(swift.level, 3, `swift.level | 3`)
  swift.exp += 175
  test(swift.level, 4, `swift.level | 4`)
  swift.exp += 65
  test(swift.level, 5, `swift.level | 5`)


}

/**
 * @callback testCallback
 * @param {function} function - challenge function to run.
 * @param {*} expected - expected output.
 * @param {...*} arguments - arguments passed to function.
 */

/**
 * @param {testCallback} test 
 */
async function* testSuite(test) {

  const slateStats = ['Slate Slabrock', 25]
  const slate = new Hero(...slateStats)

  const swiftStats = ['Swift Ironstag', 15]
  const swift = new Hero(...swiftStats)

  yield await test(function Hero(name, health, member) { return slate.name }, 'Slate Slabrock', ...slateStats, 'name')
  yield await test(function Hero(name, health, member) { return slate.health }, 25, ...slateStats, 'health')
  yield await test(function Hero(name, health, member) { return slate.maxHealth }, 25, ...slateStats, 'maxHealth')
  yield await test(function Hero(name, health, member) { return slate.healthPercent }, 100, ...slateStats, 'healthPercent')
  slate.health -= 10
  yield await test(function Hero(name, health, member) { return slate.healthPercent }, 60, ...slateStats, 'healthPercent')
  slate.health -= 5
  yield await test(function Hero(name, health, member) { return slate.healthPercent }, 40, ...slateStats, 'healthPercent')
  slate.health += 12
  yield await test(function Hero(name, health, member) { return slate.healthPercent }, 88, ...slateStats, 'healthPercent')


  yield await test(function Hero(name, health, member) { return swift.name }, 'Swift Ironstag', ...swiftStats, 'name')
  yield await test(function Hero(name, health, member) { return swift.exp }, 0, ...swiftStats, 'exp')
  yield await test(function Hero(name, health, member) { return swift.level }, 1, ...swiftStats, 'level')
  swift.exp += 49
  yield await test(function Hero(name, health, member) { return swift.level }, 1, ...swiftStats, 'level')
  swift.exp += 50
  yield await test(function Hero(name, health, member) { return swift.level }, 2, ...swiftStats, 'level')
  swift.exp += 175
  yield await test(function Hero(name, health, member) { return swift.level }, 3, ...swiftStats, 'level')
  swift.exp += 175
  yield await test(function Hero(name, health, member) { return swift.level }, 4, ...swiftStats, 'level')
  swift.exp += 65
  yield await test(function Hero(name, health, member) { return swift.level }, 5, ...swiftStats, 'level')


  yield 'TEST:END'
}