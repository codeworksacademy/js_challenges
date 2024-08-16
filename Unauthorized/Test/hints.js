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