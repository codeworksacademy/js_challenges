// Hints are all displayed at once however should follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'Itterate over the string and pull out each letter',
  'How can you determine if a letter is lowercase or not?🤔',
  "What about a letter that was equal to itself with .toLowerCase",
  'You will want to REPLACE ALL spaces in the sentence with nothing',
  "The last challenge you will also want to replace punctuations too",
  "Using regex would allow you to replace all unwanted characters at once"
]

// Write a solution to the challenge here in plain JS
function hiddenWord(sentence) {
  let replacers = / |,|\!|\.|\?/g // RegEx
  let clean = sentence.replace(replacers, '')
  let word = ''
  for (let i = 0; i < clean.length; i++) {
    let letter = clean[i]
    if (letter.toLowerCase() == letter) {
      word += letter
    }
  }
  return word
}

// export out the function to be visible in the console
export const solution = hiddenWord.toString()