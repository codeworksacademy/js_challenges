export const hints = [
  'Try iterating up to the provided number',
  'Do not start iterating at 0',
  'Use multiplication each time you encounter i',
  '<='
]

function factorial(n) {
  let solution = 1
  for (let i = 1; i <= n; i++) {
    solution *= i
  }
  return solution
}

export const solution = factorial.toString()

export function testSuite(test, challenge) {

  test(challenge(5), 120, 5)
  test(challenge(6), 720, 6)
  test(challenge(10), 3628800, 10)
  test(challenge(12), 479001600, 12)

}