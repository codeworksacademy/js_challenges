// Hints are all displayed at once however should follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'You will want to write a couple smaller functions to handle the recursion',
  'One for counting gems and one for finding the deepest floor',
  'for the gems, loop over the floor, add return them',
  "while looping if you encounter another array then call your function again adding its result to your gems",
  "for the floor you will want to keep track of your current floor and your deepest floor",
  "for this to work, your recursive function will need to take those in as parameters",
  "each time the function increase your floor depth, and determine if this is the deepest floor",
  "loop over the floor calling itself when encounting an array, passing the curent floor and deepest floor",
  "when a deeper floor is reached the it will be returned up the to the one the function call above it until the initial call.",
  'multiply the results of the two functions together and return them',
  "if you know the depth of the dugeon you could speed things up by flattening the array and counting it's length as well"
]

// Write a solution to the challenge here in plain JS
export function dungeonDelve(dungeon) {
  let treasure = loot(dungeon)
  let floors = explore(dungeon, 0, 0)
  return treasure * floors
}

function loot(floor) {
  let gems = 0
  floor.forEach(d => {
    if (d === '💎') gems++
    if (Array.isArray(d)) gems += loot(d)
  })
  return gems
}

function explore(floor, current, deep) {
  let levels = current + 1
  let deepest = levels > deep ? levels : deep
  floor.forEach(f => {
    if (Array.isArray(f)) deepest = explore(f, levels, deepest)
  })
  return deepest
}

// export out the function to be visible in the console
export const solution = `
${dungeonDelve.toString()}
${loot.toString()}
${explore.toString()}
`