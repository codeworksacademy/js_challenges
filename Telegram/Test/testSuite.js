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