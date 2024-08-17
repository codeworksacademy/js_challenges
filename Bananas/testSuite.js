// Hints are all displayed at once however should follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
const hints = [
  'There is actually a built in operator that can help quite a bit',
  'Look into typeof',
  'under JavaScripts hood, a lot of things are actually objects which can be tricky',
  'check the more difficult types first then the simple ones',
  "don't forget to strictly compare when typing data"
]

// Write a solution to the challenge here in plain JS
function bananas(data) {
  if (data === null) return 'null'
  if (data === undefined) return 'undefined'
  if (Array.isArray(data)) return 'array'
  return typeof data
}

// export out the function to be visible in the console
const solution = bananas.toString()

// here is where you can write the multiple test cases for the challenge
function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge('Oslo eats bananas with tongs'), 'string', 'Oslo eats bananas with tongs')
  test(challenge(100), 'number', 100)
  test(challenge(false), 'boolean', false)
  test(challenge(['Herbert', '🦍', 'eats bananas with a fork']), 'array', ['Herbert', '🦍', 'eats bananas with a fork'])
  test(challenge({ name: 'Malinda', emoji: '🐒', utensil: 'spork' }), 'object', { name: 'Malinda', emoji: '🐒', utensil: 'spork' })
  test(challenge(undefined), 'undefined', undefined)
  test(challenge(null), 'null', null)
  test(challenge(Symbol('Good job')), 'symbol', Symbol('Good job'))
}