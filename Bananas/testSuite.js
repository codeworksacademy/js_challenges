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

  yield await test(bananas, 'number', 6)
  yield await test(bananas, 'string', 'sandwich')
  yield await test(bananas, 'string', '8')
  yield await test(bananas, 'boolean', true)
  yield await test(bananas, 'object', { banana: 'sandwich' })
  yield await test(bananas, 'array', [1, 2, 3])
  yield await test(bananas, 'null', null)
  yield await test(bananas, 'undefined', undefined)
  yield await test(bananas, 'error', new Error("whoops!"))


  yield 'TEST:END'
}