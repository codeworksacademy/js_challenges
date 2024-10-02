/**
 * @callback testCallback
 * @param {function} function - challenge function to run.
 * @param {*} expected - expected output.
 * @param {...*} arguments - arguments passed to function.
 */

// here is where you can write the multiple test cases for the challenge
let showdown1 = ['___BANG___', '______BANG']
let showdown2 = ['__BANG', 'BANG__']
let showdown3 = ['____B_A', '_______']
let showdown4 = ['B___AN____G_', '___B_A_NG___']
let showdown5 = ['____BA_N__G_', '__B__A_N__G_']


/**
 * @param {testCallback} test 
 */
async function* testSuite(test) {

  yield await test(bang, 1, ...showdown1)
  yield await test(bang, 2, ...showdown2)
  yield await test(bang, 0, ...showdown3)
  yield await test(bang, 2, ...showdown4)
  yield await test(bang, 0, ...showdown5)

  yield 'TEST:END'
}