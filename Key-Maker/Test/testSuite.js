// here is where you can write the multiple test cases for the challenge
const theNeb = ['Morpheus', 'Trinity', 'Link', 'Tank', 'Dozer', 'Apoc', 'Cypher', 'Mouse', 'Switch']
const zion = {population: 250000, founders: 23, reboots: 6}
const neo = [['Matrix'],['Reloaded'],['Revolutions']]

export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge('red'), 'blue', 'red')
  test(challenge('shoot-out'), 'lobby', 'shoot-out')
  test(challenge(1), 'keanu', 1)
  test(challenge(null), 'smith', null)
  test(challenge(false), 'choice', false)
  test(challenge(true), 'null', true)
  test(challenge(theNeb), 'Nebuchadnezzar', theNeb)
  test(challenge(zion), 'zion', zion)
  test(challenge(neo), 'neo', neo)

}