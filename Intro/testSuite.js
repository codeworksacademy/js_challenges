
/**
 * @callback testCallback
 * @param {function} function - challenge function to run.
 * @param {*} expected - expected output.
 * @param {*} arguments - arguments passed to function.
 */

/**
 * @param {testCallback} test 
 */
async function* testSuite(test) {

  yield await test(addTen, 20)

  yield await test(doubleIt, 20, 10)
  yield await test(doubleIt, -10, -5)

  yield await test(thisAndThat, 'this and that', 'that')
  yield await test(thisAndThat, 'this and the other', 'the other')

  yield 'TEST:END'
}


