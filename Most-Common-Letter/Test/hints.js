export const hints = [
  'Before you start iterating you will want to create some storage variables',
  'It might be easier to keep your high letter count and high letter variables seperate',
  'Create a dictionary for all of your letters, something like this structure works well {a:1, c:3}',
  'There are several ways to remove the space or simply `continue` past it',
  'Be sure to return the letter not the count'
]


function mostCommonLetter(str) {
  const letters = {}
  let highestLetter = ''
  let highestLetterCount = 0
  for (let i = 0; i < str.length; i++) {
    const letter = str[i]
    if (letter == ' ') { continue }
    letters[letter] = letters[letter] || 0
    letters[letter]++
    if (highestLetterCount < letters[letter]) {
      highestLetterCount = letters[letter]
      highestLetter = letter
    }
  }
  return highestLetter
}

export const solution = mostCommonLetter.toString()

