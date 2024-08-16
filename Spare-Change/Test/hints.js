// Hints are all displayed based on a runcount follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
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
export const solution = spareChange.toString()