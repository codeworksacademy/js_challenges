// Hints are all displayed at once however should follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'Try and find the right user, using the name first',
  "If correct, Both the user's password and scrambled password will be made of the same characters",
  "Don't try to un-scramble the password",
  "To help, think about how you could get these strings to match 'ABC' 'CAB'",
  "If you sort both strings, and they are made of the exact same characters they should match",
  'sort is not a string string method 🥲',
  'turn the strings into arrays before you sort'
]

// Write a solution to the challenge here in plain JS
export function unAuthorized(username, scramble) {
  let password = scramble.split('').sort().join('')
  let user = null
  for (let i = 0; i < users.length; i++) {
    let currentUser = users[i]
    if (currentUser.username == username) {
      if (password == currentUser.password.split('').sort().join('')) {
        user = currentUser
      }
    }
  }
  return user
}

// export out the function to be visible in the console
export const solution = unAuthorized.toString()

// here is where you can write the multiple test cases for the challenge
let users = [
  { username: 'Mack', password: 'CrocT0wnUS@' },
  { username: 'Lake', password: 'xY07$_:"word1248' },
  { username: 'Pam', password: 'W!ldD0gg!e' },
  { username: 'J.Remy', password: '#1:STRONG:GUY' },
  { username: 'Izzlo', password: 'Wr1nk!eBr@jN_' }
]

export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge('Mack', 'cowrST0Un@C'), users[0], 'Mack cowrST0Un@C')
  test(challenge('Pam', 'l0DWged!g!'), users[2], 'Pam L0DWged!g!')
  test(challenge('Pam', 'L*tt%_:'), 'null', 'Pam L*tt%_:')
  test(challenge('J.Remy', 'YT1G::SOR#UNG'), users[3], 'J.Remy', 'YT1G::SOR#UNG')
  test(challenge('Lake', 'Wr1nk!eBr@jN_'), 'null', 'Lake Wr1nk!eBr@jN_')
  test(challenge('Lake', '4xwY7_od$208:r"1'), users[1], 'Lake 4xwY7_od$208:r"1')
}