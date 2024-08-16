export function testSuite(test, challenge) {

  test(challenge(3, 4), 25, [3, 4])

  test(challenge(3, 5), 34, [3, 5])

  test(challenge(180, 259), 99481, [180, 259])

}