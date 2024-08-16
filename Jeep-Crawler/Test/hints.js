// Hints are all displayed at once however should follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'itterate over the trail',
  'create a spot to save the rocks size',
  'when you encounter a rock, increase the rock size',
  'if you encounter a empty trail, reset the rock size',
  'if you itterate through the whole trail, that means you can crawl it.'
]

// Write a solution to the challenge here in plain JS
function jeepCrawler(input) {
 let rock = 0
  for(let i = 0; i < trail.length; i++){
    let spot = trail[i]
    if(spot == '#'){
      rock++
      if (rock > 4) return false
    } else {
      rock = 0
    }
  }
  return true
}

// export out the function to be visible in the console
export const solution = jeepCrawler.toString()