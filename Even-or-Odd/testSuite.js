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

  yield await test(evenOrOdd, 'even', 2)
  yield await test(evenOrOdd, 'odd', 3)
  yield await test(evenOrOdd, 'even', 24)
  yield await test(evenOrOdd, 'odd', -151)
  yield await test(evenOrOdd, 'even', 0)

  yield 'TEST:END'
}