// Hints are all displayed based on a runcount follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'Create a copy of the devices array, and break refrence to it using ...',
  'loop over the instructions, and conditionally perform one of two actions',
  'you can use slice to  modify or copy of the devices array',
  'create a varible to be the middle index',
  'on < slice up to the middle, > start at the middle and slice to the end',
  'instead of looping over the instructions length, try looping until you spot the mole',
  "try a do while loop, and don't forget to reset your index when it reaches the length of instructions"
]

// Write a solution to the challenge here in plain JS
function interceptor(instructions) {
 let mole = null
  let i = 0
  let suspects = [...devices]
  do{
    let dir = instructions[i]
    let halfIndex = Math.round(suspects.length/2)
    if(suspects.length == 1) mole = suspects[0]
    if(dir == '<'){
      suspects = suspects.slice(0, halfIndex)
    } else {
      suspects = suspects.slice(halfIndex)
    }
    i++
    if(i >= instructions.length) i = 0
  } while (!mole)
  return mole
}

// export out the function to be visible in the console
export const solution = interceptor.toString()