// here is where you can write the multiple test cases for the challenge
let string1 = '➡️__➡️⬇️_↘️➡️A_A__AB⬇️__⬆️B'
let string2 = '⬆️⬆️⬇️⬇️⬅️➡️⬅➡AB_'
let string3 = '➡️_➡️_⬅️⬇️__⬅️⬇️_⬆️_B___⬇️___↙️⬅️_B_A_AA_⬇️↙️➡️__⬇️↘️_A'
let string4 = '➡️_➡️↗️__B_⬇️AA_➡️__⬇️↘️A_⬅️___➡️A__➡️_➡️___B_⬇️A➡️__↘️⬇️_↙️⬅️↖️_⬆️↗️➡️AB_'

export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge(string1), ['fireball', 'flash-kick'], string1)
  test(challenge(string2), ['sonic-boom'], string2)
  test(challenge(string3), ['flash-kick', 'dragon-punch'], string3)
  test(challenge(string4), ['dragon-punch', 'wulfamania'], string4)

}