export const hints = [
  'If you don\'t understand split().reverse().join() try something else. Googling the answer is not the point... 👀',
  'Give yourself a varible to hold the reversed string before you start looping',
  'You do not have to count or loop backwards that is hard...',
  'Do not use += or push',
]


function isPalindrome(word) {
  let reversed = ''
  for (let i = 0; i < word.length; i++) {
    let letter = word[i]
    reversed = letter + reversed
  }
  return reversed === word
}

export const solution = isPalindrome.toString()



export function testSuite(test, challenge) {

  test(challenge('racecar'), true, 'racecar')
  test(challenge('tacocat'), true, 'tacocat')
  test(challenge('kayak'), true, 'kayak')
  test(challenge('banana'), false, 'banana')
  test(challenge('noon'), true, 'noon')
  test(challenge('deep'), false, 'deep')
  test(challenge('rotator'), true, 'rotator')
  test(challenge('nope'), false, 'nope')
  test(challenge('wow'), true, 'wow')

}