export function testSuite(test, challenge) {
  
  test(challenge(7), 3, 7)
  test(challenge(50), 9, 50)
  test(challenge(10), 4, 10)
  test(challenge(11), 4, 11)
  test(challenge(15), 5, 15)
  test(challenge(700), 36, 700)
  test(challenge(12932), 160, 12932)

}