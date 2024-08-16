// Hints are all displayed at once however should follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'Most important step, itterate through the building',
  "focus on returning the correct keys for just the primitive values first",
  'While itterating keep track of both the current key you are on and the value',
  'If the values match, just return the key instead of the value',
  "if you itterate through the whole building without a match, then you can return null",
  "Once primitives are working create a variable for the type of the source",
  "Determine the type of the source before your itteration",
  "Complex data structures like arrays and objects cannot be compared as is",
  "This is because they are refrence type. They must change type first",
  "We just need a way to turn a complex data structure to a primitive type 🤔",
  "When saving to local storage we often turn complex objects into strings",
  "Good luck, the fate of humanity depends on you"
]
function keyMaker(source) {
  let sourceType = 'primitive' //determine data type of source
  if (typeof source == 'object' && source) {
    sourceType = 'complex'
  }

  for (let key in building) {
    let door = building[key]
    if (sourceType == 'primitive' && source === door) { // if num, string or bool
      return key
    }
    if (sourceType == 'complex') { // if source is complex like an array or object
      let same = JSON.stringify(door) == JSON.stringify(source)
      if (same) return key
    }
  }
  return null // if loop ends, then no door was found
}

// export out the function to be visible in the console
export const solution = keyMaker.toString()