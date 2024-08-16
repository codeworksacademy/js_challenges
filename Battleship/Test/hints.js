// Hints are all displayed at once however should follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'Arrays in an array. So itteration in itteration',
  'Your first loop will itterate over the rows, and your second over the columns',
  'keep track of both your index values. To make it easier you can call them x and y',
  'create an array on the outside to turn your column position into a Letter',
  'the position of your x should match with the correct letter',
  'if you ever encounter a 1 you can save that position or end the function there returning that position',
  "Don't forget to convert it to the traditional battleship style coordinates!"
]

// Write a solution to the challenge here in plain JS
function radarPing(input) {
  let cols = ['A','B','C','D','E','F','G']
  let out = ''
  sea.forEach((row,y) =>{
    row.forEach((cell,x)=>{
      if(cell == 1) {
        out = cols[x] + (y+1)
        return //returning her will end this loop early
      }
    })
  })
  return out
}

// export out the function to be visible in the console
export const solution = radarPing.toString()