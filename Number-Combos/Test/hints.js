// Hints are all displayed at once however should follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'You will likely want to double itterate',
  'You can combine two numbers then use find on the array to get a combo',
  'create an array outside you loops to store your combos',
  "before adding it to your combos array don't forget to check if it's already there",
  'You could also use a set for combos instead of an array',
  "Don't add an number to itself, or you could get a bad return"
]

// Write a solution to the challenge here in plain JS
function combos(nums) {
  const combos = []
  nums.forEach((num1,i) =>{
    nums.forEach((num2,j)=>{
      if(i != j){
        let combo = nums.find(n => n == num1 + num2)
        if(combo && !combos.includes(combo)) combos.push(combo)
      }
    })
  })
  return combos
}

// export out the function to be visible in the console
export const solution = combos.toString()