// here is where you can write the multiple test cases for the challenge
let food1 = ['🐄', '🐔', '🐙']
let food2 = [ '🐊', '🍅', '🐄', '🥬', '🌿']
let food3 = ['🐄', '🐟', '🐡', '🐖', '🥕']
let food4 = ['🐠', '🐊', '🥬', '🐡', '🐄', '🐄', '🐙', '🌿']

export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge(food1), ['🍔','🍔', '🍣'], food1)
  test(challenge(food2), ['🍔', '🥗', '🍔', '🥗', '🥗'], food2)
  test(challenge(food3), ['🍔','🍔', '🥗', '🍣', '🍣'], food3)
  test(challenge(food4), ['🍔','🥗', '🍔', '🍔','🥗', '🍣', '🍣', '🍣'], food4)

}