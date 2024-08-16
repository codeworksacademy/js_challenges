// here is where you can write the multiple test cases for the challenge


export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge('Stefania Pyatoslavivna'), true, 'Stefaniya Pyatoslavivna')
  test(challenge('Yeva Petrivna Svoychenko'), true, 'Yeva Petrivna Svoychenko')
  test(challenge('Artyom Chyornyj'), false, 'Artyom Chyornyj')
  test(challenge('Zynovis Pavlov'), true, 'Zynovis Pavlov')

}