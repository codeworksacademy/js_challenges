export const hints = [
  'Try breaking each of the words out of the sentence by their spaces',
  'Each word has a length, look into using the array sort method with this',
  'Try looking at the first or last item of the array of words after it has been sorted.'
]

function longestWord(str) {
  let words = str.split(' ')
  words.sort((a, b) => b.length - a.length)
  return words[0]
}

export const solution = longestWord.toString()