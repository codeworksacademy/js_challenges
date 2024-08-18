export const hints = [
  'Be sure your function takes in a parameter',
  'Have you ever used the modulus operator?',
  'Be sure you are returning a string'
]


function evenOrOdd(num) {
  if (num % 2 == 0) {
    return 'even'
  }
  return 'odd'
}

export const solution = evenOrOdd.toString()




export function testSuite(test, challenge) {

  test(challenge(2), 'even', 'the number 2 should return the string even')

  test(challenge(1), 'odd', 'the number 1 should return the string odd')

  test(challenge(10000), 'even', 'even large numbers are handled appropriately')

  test(challenge(10001), 'odd', 'even large numbers are handled appropriately')

  test(challenge(10002), 'even', 'even large numbers are handled appropriately')

  test(challenge(104326), 'even', 'even large numbers are handled appropriately')

  test(challenge(104329), 'odd', 'even large numbers are handled appropriately')

}