

// test(challenge('racecar'), true, 'racecar')
// test(challenge('kayak'), true, 'kayak')
// test(challenge('banana'), false, 'banana')
// test(challenge('noon'), true, 'noon')
// test(challenge('deep'), false, 'deep')
// test(challenge('rotator'), true, 'rotator')
// test(challenge('nope'), false, 'nope')
// test(challenge('wow'), true, 'wow')
// test(challenge('taco cat'), true, 'taco cat')


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

  yield await test(palindrome, true, 'racecar')
  yield await test(palindrome, true, 'kayak')
  yield await test(palindrome, false, 'banana')
  yield await test(palindrome, false, 'oslo')
  yield await test(palindrome, true, 'rotator')
  yield await test(palindrome, false, 'nope')
  yield await test(palindrome, true, 'taco cat')
  yield await test(palindrome, true, 'yo banana boy')

  yield 'TEST:END'
}