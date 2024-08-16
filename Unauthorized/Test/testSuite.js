// here is where you can write the multiple test cases for the challenge
let users = [
  { username: 'Mack', password: 'CrocT0wnUS@' },
  { username: 'Lake', password: 'xY07$_:"word1248' },
  { username: 'Pam', password: 'W!ldD0gg!e' },
  { username: 'J.Remy', password: '#1:STRONG:GUY' },
  { username: 'Tzach', password: '$crum1' }
]

export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge('Mack', 'cowrST0Un@C'), users[0], 'Mack cowrST0Un@C')
  test(challenge('Pam', 'l0DWged!g!'), users[2], 'Pam L0DWged!g!')
  test(challenge('Pam', 'L*tt%_:'), 'null', 'Pam L*tt%_:')
  test(challenge('J.Remy', 'YT1G::SOR#UNG'), users[3], 'J.Remy', 'YT1G::SOR#UNG')
  test(challenge('Lake', 'r$1ucm'), 'null', 'Lake r$1ucm')
  test(challenge('Lake', '4xwY7_od$208:r"1'), users[1], 'Lake 4xwY7_od$208:r"1')
}