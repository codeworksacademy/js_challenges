// here is where you can write the multiple test cases for the challenge
let showdown1 = ['___BANG___', '______BANG']
let showdown2 = ['__BANG', 'BANG__']
let showdown3 = ['B___AN____G_', '___B_A_NG___']

export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge(...showdown1), 1, showdown1.join(' '))
  test(challenge(...showdown2), 2, showdown2.join(' '))
  test(challenge(...showdown3), 2, showdown3.join(' '))

}