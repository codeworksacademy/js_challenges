

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

  yield await test(kingOfPong, 'Thorsten💢')

  yield await test(kingOfVirtue, 'Sprinkles🍡')


  yield 'TEST:END'
}