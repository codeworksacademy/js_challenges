// here is where you can write the multiple test cases for the challenge


export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge('___#__##____####_##__##_###_#_'), true, '___#__##____####_##__##_###_#_')
  test(challenge('__#__##_#_##_#_#_'), true, '__#__##_#_##_#_#_')
  test(challenge('##__#_#####_#_'), false, '##__#_#####_#_')
  test(challenge('_#_######_'), false, '_#_######_')

}