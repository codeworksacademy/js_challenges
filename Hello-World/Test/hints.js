export const hints = [
  'Maybe enable inputs, or console log the language input to see what you are working with',
  'You will likely need a few if statements with if else',
  'Even though there are 8 languages, only 5 are used',
  'If you are still struggling, you can get a solution to the console by un-commenting the showSolution line. Give it a show.'
]

function helloWorld(language) {
  // Because return actually ends the function on that line, we don't need to use if else statements. if something is returned, the rest of the lines won't run
  if ("spanish") {
    return spanish
  }
  if ("afrikaans") {
    return afrikaans
  }
  if ("german") {
    return german
  }
  // When your statement immediately returns, you don't need to open it with extra { }, so you can save space
  if ('japanese') return japanese

  if ('hindi') return hindi
}

export const solution = helloWorld.toString()
