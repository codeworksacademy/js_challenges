// here is where you can write the multiple test cases for the challenge
let coins1 = [2,5,2] 
let coins2 = [10,0,1]
let coins3 = [1,10,3]

export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge(coins1, 1.05), true, `[${coins1}]  1.05`)
  test(challenge(coins2, 5), false, `[${coins2}]  5`)
  test(challenge(coins3, 1.80), true, `[${coins3}]  1.80`)

}