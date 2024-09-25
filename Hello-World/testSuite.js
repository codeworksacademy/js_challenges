const hints = [
  'Maybe enable inputs, or console log the language input to see what you are working with',
  'You will likely need a few if statements with if else',
  'Even though there are 8 languages, only 5 are used',
  'If you are still struggling, you can get a solution to the console by un-commenting the showSolution line. Give it a show.'
]


function helloWorld(language) {
  // Because return actually ends the function on that line, we don't need to use if else statements. if something is returned, the rest of the lines won't run
  if (language == "spanish") {
    return spanish
  }
  if (language == "afrikaans") {
    return afrikaans
  }
  if (language == "german") {
    return german
  }
  // When your statement immediately returns, you don't need to open it with extra { }, so you can save space
  if (language == 'japanese') return japanese

  if (language == 'hindi') return hindi
}

const solution = helloWorld.toString()


// let english = 'Hello World!'
// let spanish = '¡Hola Mundo!'
// let afrikaans = 'Hello Wêreld!'
// let italian = 'Ciao mondo!'
// let german = 'Hallo Welt!'
// let chinese = 'Nǐ hǎo shìjiè!'
// let japanese = "`Kon'nichiwa sekai'"
// let hindi = 'hailo varld!'

function testSuite(test, challenge) {

  test(challenge('spanish'), '¡Hola Mundo!', ['spanish', '¡Hola Mundo!'])
  test(challenge('afrikaans'), 'Hello Wêreld!', ['afrikaans', 'Hello Wêreld!'])
  test(challenge('german'), 'Hallo Welt!', ['german', 'Hallo Welt!'])
  test(challenge('japanese'), "`Kon'nichiwa sekai'", ['japanese', "`Kon'nichiwa sekai'"])
  test(challenge('hindi'), 'hailo varld!', ['hindi', 'hailo varld!'])


}
