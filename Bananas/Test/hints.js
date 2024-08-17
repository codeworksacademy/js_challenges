// Hints are all displayed at once however should follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'There is actually a built in operator that can help quite a bit',
  'Look into typeof',
  'under JavaScripts hood, a lot of things are actually objects which can be tricky',
  'check the more difficult types first then the simple ones',
  "don't forget to strictly compare when typing data"
]

// Write a solution to the challenge here in plain JS
function bananas(data) {
  if (data === null) return 'null'
  if (data === undefined) return 'undefined'
  if (Array.isArray(data)) return 'array'
  return typeof data
}

// export out the function to be visible in the console
export const solution = bananas.toString()