/**
 * @callback testCallback
 * @param {function} function - challenge function to run.
 * @param {*} expected - expected output.
 * @param {...*} arguments - arguments passed to function.
 */

// [nickels, dimes, quarters]
let coins1 = [2, 5, 2] // 1.10
let coins2 = [10, 0, 1] // 0.75
let coins3 = [1, 10, 3] // 1.80
let coins4 = [10000, 0, 0] // 100


/**
 * @param {testCallback} test 
 */
async function* testSuite(test) {

  yield await test(spareChange, true, coins1, 1.05)
  yield await test(spareChange, false, coins2, 1.00)
  yield await test(spareChange, false, coins3, 1.99)
  yield await test(spareChange, true, coins4, 99.99)


  yield 'TEST:END'
}