const hints = [
  'Try breaking each of the words out of the sentence by their spaces',
  'Each word has a length, look into using the array sort method with this',
  'Try looking at the first or last item of the array of words after it has been sorted.'
]

function longestWord(str) {
  let words = str.split(' ')
  words.sort((a, b) => b.length - a.length)
  return words[0]
}

const solution = longestWord.toString()

function testSuite(test, challenge) {

  test(challenge('Welcome to Jurrasic Park'), 'Jurrasic', 'Welcome to Jurrasic Park')

  test(challenge("I want to be the very best Like no one ever was To catch them is my real test To train them is my cause I will travel across the land Searching far and wide Each Pokemon to understand The power that's inside"), 'understand', "I want to be the very best Like no one ever was To catch them is my real test To train them is my cause I will travel across the land Searching far and wide Each Pokemon to understand The power that's inside")

}