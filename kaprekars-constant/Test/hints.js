export const hints = [
  'Try converting the number to a string',
  'Create two copies of the string numbers',
  'sort the copies one high the other low',
  'you can\'t sort strings so another conversion here',
  'join the sorted strings back together and then convert them back into numbers',
  'subtract the numbers....',
  'check if the result is the number you are looking for...',
  'if not increment some sort of count and change the num',
  'repeat all of the steps above',
  'Good Luck!!!'
]

function Kaprekar(num) {
  const k = 6174
  let iterations = 0
  while (iterations < 7) {
    iterations++
    let h = +(num.toString().sort((a, b) => b - a))
    let l = +(num.toString().sort((a, b) => a - b))
    let s = Math.abs(h - l)
    if (s == k) { return iterations }
  }
  return iterations
}

export const solution = Kaprekar.toString()