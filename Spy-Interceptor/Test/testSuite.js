// here is where you can write the multiple test cases for the challenge
const devices = ['🧔📱', '👧📱', '👷‍♂️💻', '🕵️‍♂️📷', '🧙‍♂️🔮', '👸💻', '👨‍🦳☎', '👨‍🍳📺', '👮‍♀️📟', '🧛‍♀️🦇', '👽🌽', '🧜‍♂️🎸', '👩‍🦱📱','👨‍🦰📳', '👩‍🏫💻', '👩‍🚀📡', '🧚‍♂️✨', '🐵🍌', '👩‍🦲📱', '👩‍💻💻', '🧝‍♀️🎤','👶📱', '🤖', '🤡📯', '👨‍⚖️📱', '👩‍🚒📱', '👱‍♂️💻', '🦝🍩']
const instructions1 = ['<','>','>','<','<']
const instructions2 = ['>','>','>','<','>']
const instructions3 = ['<','>', '<']

export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge(instructions1), '🧜‍♂️🎸', instructions1)
  test(challenge(instructions2), '👱‍♂️💻', instructions2)
  test(challenge(instructions3), '👮‍♀️📟', instructions3)

}