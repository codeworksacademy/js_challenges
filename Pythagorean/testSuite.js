export const hints = [
  'Remember to take in two parameters',
  'remember PEMDAS',
  'The ^ is NOT the square operator in JavaScript.',
  'Just multiply the numbers by themselves'
]

function pythagorean(a, b) {
  return a * a + b * b
}

export const solution = pythagorean.toString()

export function testSuite(test, challenge) {

  test(challenge(3, 4), 25, [3, 4])

  test(challenge(3, 5), 34, [3, 5])

  test(challenge(180, 259), 99481, [180, 259])

}