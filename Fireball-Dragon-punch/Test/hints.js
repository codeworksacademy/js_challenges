// Hints are all displayed based on a runcount follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'itterate over the string singling out each input',
  "there are only 2 types of inputs we care about, _ and the actions",
  "when you encounter a _ tally them up, and actions add them together",
  "Each time there is an action, you can check it against the guide for a special move",
  "if your _ tally reaches 3 reset it and your string",
  "Each time there is an action reset the tally of _",
  "you can itterate over the keys in guide and see if you string includes one",
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
export const solution = specialString.toString()