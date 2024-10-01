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

  yield await test(helloWorld, 'english')
  yield await test(helloWorld, 'spanish')
  yield await test(helloWorld, 'german')
  yield await test(helloWorld, 'chinese')
  yield await test(helloWorld, 'gibberish')
  yield await test(helloWorld, 'pig latin')

  yield 'TEST:END'
}


