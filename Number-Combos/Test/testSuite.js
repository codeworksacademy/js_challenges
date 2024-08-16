// here is where you can write the multiple test cases for the challenge
const two = [5, 8, 22, 25, 30, 33]
const three = [1,2,3,4,5,6,7,8]

export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge([4, 8, 12, 16, 20]), [12,16,20], [4, 8, 12, 16, 20])
  test(challenge(two), [30,33], two)
  test(challenge(three), [3,4,5,6,7,8], three)

}