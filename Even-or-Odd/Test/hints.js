export const hints = [
  'Be sure your function takes in a parameter',
  'Have you ever used the modulus operator?',
  'Be sure you are returning a string'
]


function evenOrOdd(num){
  if (num % 2 == 0){
    return 'even'
  }
  return 'odd' 
}

export const solution = evenOrOdd.toString()

