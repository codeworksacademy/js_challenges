// Hints are all displayed based on a runcount follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'Try using a switch statement with fallthrough cases for the different foods',
  'Putting that switch in a map would allow you to create a new array efficiently',
  'Sort the food items, since there is no obvious sorting order you will have to come up with one',
  "for sorting, returning a 0, keeps an items position, -1 moves it toward the start, and 1 toward the end",
  'console log your a and b, inside the sort to check what they are',
  "Try moving all none sushi items forward instead of all sushi back"
]

// Write a solution to the challenge here in plain JS
function proccessor(raw) {
  let foods = raw.map(item => {
    switch (item) {
      case '🐄':
      case '🐔':
      case '🐖':
      case '🐊':
        return '🍔'
        break;
      case '🐟':
      case '🐠':
      case '🐡':
      case '🐙':
        return '🍣'
        break;
      case '🥬':
      case '🌿':
      case '🍅':
      case '🥕':
        return '🥗'
        break;
    }
  })
  return foods.sort((a, b) => {
   if (b == '🍣') {
      return -1
    }
    return 0
  })
}

// export out the function to be visible in the console
export const solution = proccessor.toString()