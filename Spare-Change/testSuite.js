// Hints are all displayed based on a runcount follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
const hints = [
  'Since the array is always the same length and pretty short, you dont need to loop',
  'create variables for all the coins, calculating each of the total values',
  'if the total value of the coins is enough for the price return true otherwise return false'
]

// Write a solution to the challenge here in plain JS
function spareChange(coins, price) {
  const nickles = coins[0] * .05
  const dimes = coins[1] * .1
  const quarters = coins[2] * .25
  return nickles + dimes + quarters >= price
}

// export out the function to be visible in the console
const solution = spareChange.toString()

// here is where you can write the multiple test cases for the challenge
let coins1 = [2, 5, 2]
let coins2 = [10, 0, 1]
let coins3 = [1, 10, 3]

function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge(coins1, 1.05), true, `[${coins1}]  1.05`)
  test(challenge(coins2, 5), false, `[${coins2}]  5`)
  test(challenge(coins3, 1.80), true, `[${coins3}]  1.80`)

}