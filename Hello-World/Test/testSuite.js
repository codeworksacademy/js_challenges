let english = 'Hello World!'
let spanish = '¡Hola Mundo!'
let afrikaans = 'Hello Wêreld!'
let italian = 'Ciao mondo!'
let german = 'Hallo Welt!'
let chinese = 'Nǐ hǎo shìjiè!'
let japanese = "`Kon'nichiwa sekai'"
let hindi = 'hailo varld!'

export function testSuite(test, challenge) {

  test(challenge('spanish'), spanish, ['spanish', spanish])
  test(challenge('afrikaans'), afrikaans, ['afrikaans', afrikaans])
  test(challenge('german'), german, ['german', german])
  test(challenge('japanese'), japanese, ['japanese', japanese])
  test(challenge('hindi'), hindi, ['hindi', hindi])


}