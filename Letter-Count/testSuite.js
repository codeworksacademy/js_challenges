const hints = [
  'Create a variable that can store the starting count before creating your loop',
  "Don't try to use i for the letter counter. Leave it to deal with the loop",
  'be sure to increment your letter counter each time you encounter the letter in the string use comparison in the loop == with an if statement',
  'make sure you return the count it should be a number'
]


function letterCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == letter) {
      count++
    }
  }
  return count
}

const solution = letterCount.toString()



function testSuite(test, challenge) {

  const aardvark = 'aardvark'
  const eel = 'eel'
  const voodoo = 'voodoo'

  test(challenge(aardvark, 'a'), 3, aardvark)
  test(challenge(aardvark, 'd'), 1, aardvark)
  test(challenge(eel, 'e'), 2, eel)
  test(challenge(voodoo, 'o'), 4, voodoo)

}