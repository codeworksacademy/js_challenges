// Hints are all displayed based on a runcount follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'The first house takes the most matches to build',
  'How many matches does it take to build the 2nd house?',
  'The 3rd house should take the same amount of matches it took to build the 2nd',
  'offset your starting matches by the one extra match the first house takes',
  'to get the rest of the houses divide your matches by 4, rounding down',
  'return the result of the math previously listed'
]

// Write a solution to the challenge here in plain JS
function matchStickHouses(matches) {
  let houses = Math.floor((matches - 1) / 4)
  return houses
}

// export out the function to be visible in the console
export const solution = matchStickHouses.toString()

export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge(12), 2, 12)
  test(challenge(24), 5, 24)
  test(challenge(5), 1, 5)
  test(challenge(10000), 2499, 10000)

}