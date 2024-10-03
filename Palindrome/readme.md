# Palindrome  

## Instructions

Given a *string* as `word` as a parameter. **Return** `true` if the word is a *palindrome* or `false` if it is not.

> * A Palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., `madam` or `nurses run`*

```js
word = 'racecar' // => true
word = 'banana' // => false
word = 'taco cat' // => true
```

You might want to look into [replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) method, it will certainly help with the *phrase* cases.

## Skills

Challenges based around string manipulation are always applicable to many real-world programming tasks. Working with palindromes can be a stepping stone to more complex string and data structure problems.

## Solutions

While there are some pretty quick solutions to this one if you chain together a few built in methods, that creates a sloppy solution that is hard to understand. The fundamental strategy here is to reverse the given `word`, then compare our `reverse`d word against the original word. 

We can create a `for` loop that iterates through the word *backwards* and rebuilds the word in `reverse`. Once the loop ends we can compare the two.

```js
function palindrome(word){
  let reversed = ''
  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i]
    reversed += letter
  }
  return reversed === word
}
```

The problem is that this only solves single word *palindromes* not any phrases. The *space* character messes up our solution. This is where a very common string *method*, `.replaceAll` comes in handy. This method takes in two arguments, a `pattern` and a `replacement`, `.replaceAll(pattern, replacement)`.  The `pattern` is what it should look for in the *string* and the `replacement` is what any matching `patterns` will be replaced with. We can set our `pattern` to `' '` the space character, and our `replacement` to `''` an empty string. They look similar but the `' '` space *is* a character that can be replaced with nothing `''`.

We would just want to create a `noSpace` version of our word before we iterate, and then `for` loop over that instead.

```js
function palindrome(word){
  let noSpace = word.replaceAll(' ', '')
  let reversed = ''
  for (let i = noSpace.length - 1; i >= 0; i--) {
    let letter = noSpace[i]
    reversed += letter
  }
  return reversed === noSpace
}
```