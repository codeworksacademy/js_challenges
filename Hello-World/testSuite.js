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

  yield await test(helloWorld, 'Hello World!', 'english')
  yield await test(helloWorld, '¡Hola Mundo!', 'spanish')
  yield await test(helloWorld, 'Hallo Welt!', 'german')
  yield await test(helloWorld, 'Nǐ hǎo shìjiè!', 'chinese')
  yield await test(helloWorld, '👋🌎', 'asl')
  yield await test(helloWorld, '👋🌎', 'gibberish')

  yield 'TEST:END'
}


