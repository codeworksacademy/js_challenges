// Hints are all displayed at once however should follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'create variables for s, p and y, so you can track if you have seen them',
  'itterate over your string pulling out each letter',
  'check if that leter is either s, p or y and update the matching variable appropriately',
  "don't forget to lowercase your letter for easier checking"
]

// Write a solution to the challenge here in plain JS
function isSpy(name) {
  let s = false
  let p = false
  let y = false
  for(let i = 0; i < name.length; i++){
    let char = name[i].toLowerCase()
    if(char == 's') s = true
    if(char == 'p') p = true
    if(char == 'y') y = true
  }
  return s && p && y
}

// export out the function to be visible in the console
export const solution = isSpy.toString()