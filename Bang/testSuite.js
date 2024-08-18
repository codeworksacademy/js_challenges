// Hints are all displayed based on a runcount follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'Create 2 variables for the speed of each gun slinger',
  'Set those variables to numbers equally the index of when they fired',
  'return the number that has the lower index',
  'We really only care about the last letter in BANG'
]

// Write a solution to the challenge here in plain JS
function challenge(gun1, gun2) {
  const speed1 = gun1.indexOf('G')
  const speed2 = gun2.indexOf('G')
  if (speed1 < speed2) return 1
  return 2
}

// export out the function to be visible in the console
export const solution = challenge.toString()



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