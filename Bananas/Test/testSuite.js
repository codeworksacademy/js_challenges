// here is where you can write the multiple test cases for the challenge


export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge('Oslo eats bananas with tongs'), 'string', 'Oslo eats bananas with tongs')
  test(challenge(100), 'number', 100)
  test(challenge(false), 'boolean', false)
  test(challenge(['Herbert','🦍', 'eats bananas with a fork']), 'array', ['Herbert','🦍', 'eats bananas with a fork'])
  test(challenge({name: 'Malinda', emoji: '🐒', utensil: 'spork'}), 'object', {name: 'Malinda', emoji: '🐒', utensil: 'spork'})
  test(challenge(undefined), 'undefined', undefined)
  test(challenge(null), 'null', null)
  test(challenge(Symbol('Good job')), 'symbol', Symbol('Good job'))

}