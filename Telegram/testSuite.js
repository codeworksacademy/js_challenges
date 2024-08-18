// Hints are all displayed based on a runcount follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'Create an array to build your telegram out',
  'Try splitting the paragraph at each word',
  'Create another variable to save your current line',
  'if the current line is about to go over 50ch, add it to the telegram and reset',
  'if your line variable is an array, you can use .join() to get the spaces back when adding it to your telegram',
  "don't forget to add your last line to the telegram whether it's 50ch or not!"
]

// Write a solution to the challenge here in plain JS
function telegram(paragraph) {
  let telegram = []
  let words = paragraph.split(' ')
  let line = []
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (line.join('').length + word.length > 50) {
      telegram.push(line.join(' ')) //.join(' ') adds the spaces back in
      line = []
    }
    line.push(word)
  }
  if (line.length) telegram.push(line.join(' '))
  return telegram
}

// export out the function to be visible in the console
export const solution = telegram.toString()

// here is where you can write the multiple test cases for the challenge
let telegram1 = "Cat not kitten around catch small lizards, bring them into house, then unable to find them on carpet so scream for no reason at 4 am yet human is behind a closed door, emergency!"

let telegram2 = "Those areas are nothing more than nancies. In recent years, before dressers, diamonds were only bees. A tinny leo's base comes with it the thought that the topfull french is a hyena. The air bay comes from a streamlined veterinarian."

let telegram3 = "Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there. Look at the sunset, life is amazing, life is beautiful, life is what you make it. In life there will be road blocks but we will over come it. You do know, you do know that they don’t want you to have lunch. I’m keeping it real with you, so what you going do is have lunch. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion! How’s business? Boomin. They don’t want us to win. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion!"

export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge(telegram1),
    [
      "Cat not kitten around catch small lizards, bring them into",
      "house, then unable to find them on carpet so scream for no",
      "reason at 4 am yet human is behind a closed door, emergency!"
    ],
    telegram1)
  // -- 2
  test(challenge(telegram2),
    [
      "Those areas are nothing more than nancies. In recent years,",
      "before dressers, diamonds were only bees. A tinny leo's",
      "base comes with it the thought that the topfull french is a",
      "hyena. The air bay comes from a streamlined veterinarian."
    ],
    telegram2)
  // -- 3
  test(challenge(telegram3),
    [
      "Watch your back, but more importantly when you get out the",
      "shower, dry your back, it’s a cold world out there. Look at",
      "the sunset, life is amazing, life is beautiful, life is what",
      "you make it. In life there will be road blocks but we will over",
      "come it. You do know, you do know that they don’t want you to",
      "have lunch. I’m keeping it real with you, so what you going do",
      "is have lunch. The weather is amazing, walk with me through",
      "the pathway of more success. Take this journey with me,",
      "Lion! How’s business? Boomin. They don’t want us to win. Let",
      "me be clear, you have to make it through the jungle to make it",
      "to paradise, that’s the key, Lion!"
    ],
    telegram3)



}