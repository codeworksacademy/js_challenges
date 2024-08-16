export function testSuite(test, challenge) {

  test(challenge(4520), 7, 4520)
  test(challenge(6754), 3, 6754)
  test(challenge(2219), 6, 2219)
  test(challenge(6642), 2, 6642)
  test(challenge(6174), 1, 6174)

}