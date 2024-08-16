// here is where you can write the multiple test cases for the challenge


export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge(12), 2, 12)
  test(challenge(24), 5, 24)
  test(challenge(5), 1, 5)
  test(challenge(10000), 2499, 10000)

}