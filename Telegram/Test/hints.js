// Hints are all displayed based on a runcount follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'Create an array to build your telegram out',
  'Try splitting the paragraph at each word',
  'Create another variable to save your current line',
  'if the current line is about to go over 50ch, add it to the telegram and reset',
  'if your line variable is an array, you can use .join() to get the spaces back when adding it to your telegram',
  "don't forget to add your last line to the telegram whether it's 50ch or not!"
]

// Write a solution to the challenge here in plain JS
function telegram(paragraph) {
   let telegram = []
  let words = paragraph.split(' ')
  let line = []
  for (let i = 0; i < words.length; i++){
    const word = words[i]
    if(line.join('').length + word.length > 50){
      telegram.push(line.join(' ')) //.join(' ') adds the spaces back in
      line = []
    }
    line.push(word)
  }
  if(line.length) telegram.push(line.join(' '))
  return telegram
}

// export out the function to be visible in the console
export const solution = telegram.toString()