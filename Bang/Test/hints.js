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
  if(speed1 < speed2) return 1
  return 2
}

// export out the function to be visible in the console
export const solution = challenge.toString()