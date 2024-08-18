// Hints are all displayed based on a runcount follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
const hints = [
  'iterate over the string singling out each input',
  "there are only 2 types of inputs we care about, _ and the actions",
  "when you encounter a _ tally them up, and actions add them together",
  "Each time there is an action, you can check it against the guide for a special move",
  "if your _ tally reaches 3 reset it and your string",
  "Each time there is an action reset the tally of _",
  "you can iterate over the keys in guide and see if you string includes one",
  "to make things a bit quicker you can only check the guide when an A or B occurs"
]

// Write a solution to the challenge here in plain JS
function specialString(inputs) {
  let performedMoves = []
  let string = ''
  let breaks = 0
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i]
    switch (input) {
      case '_':
        breaks++
        break;
      default:
        string += input
        breaks = 0
    }
    if (breaks == 3) {
      string = ''
      breaks = 0
    }
    for (let key in guide) {
      if (string.includes(key)) {
        performedMoves.push(guide[key])
        string = ''
      }
    }
  }
  return performedMoves
}

// export out the function to be visible in the console
const solution = specialString.toString()

// here is where you can write the multiple test cases for the challenge
let string1 = '➡️__➡️⬇️_↘️➡️A_A__AB⬇️__⬆️B'
let string2 = '⬆️⬆️⬇️⬇️⬅️➡️⬅➡AB_'
let string3 = '➡️_➡️_⬅️⬇️__⬅️⬇️_⬆️_B___⬇️___↙️⬅️_B_A_AA_⬇️↙️➡️__⬇️↘️_A'
let string4 = '➡️_➡️↗️__B_⬇️AA_➡️__⬇️↘️A_⬅️___➡️A__➡️_➡️___B_⬇️A➡️__↘️⬇️_↙️⬅️↖️_⬆️↗️➡️AB_'

function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge(string1), ['fireball', 'flash-kick'], string1)
  test(challenge(string2), ['sonic-boom'], string2)
  test(challenge(string3), ['flash-kick', 'dragon-punch'], string3)
  test(challenge(string4), ['dragon-punch', 'wulfamania'], string4)

}