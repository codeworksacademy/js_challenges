export function testSuite(test, challenge) {

  test(challenge(5), 120, 5)
  test(challenge(6), 720, 6)
  test(challenge(10), 3628800, 10)
  test(challenge(12), 479001600, 12)

}