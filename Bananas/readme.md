# Bananas  

## Instructions

> *Grown in more than 150 countries, it is widely believed there are more than 1, 000 types of bananas in the world, which are subdivided into 50 groups.*

Thankfully code is not so complex, at least when it comes to *`data` types*. In fact, we can write a function to identify the types of data passed to it.

 You will be given a piece of `data` as a *parameter* and it is your job to determine the type *`data`*. We don't actually care what the value of the `data` is we are just trying to figure out it's *type*. `'Hello'` would be a `string`, `38` would be `number`, `true` a `bool` and many more.

 > 🧩 hint: you will want to start with the built-in `typeof` 

```js
data = 7 // -> 'number'
data = 'sandwich' // -> 'string'
data = false // -> 'boolean'
data = {banana: 'sandwich'} // -> 'object'
data = [1,2,3] // -> 'array'
data = null // -> 'null'
data = undefined // -> 'undefined'
data = Error("What is this type?") // -> 'error'
```
## Skills

While this isn't the most common of issues. Parsing data types out of a set of data can be very helpful with certain challenges. It can help determine how we proceed with our logic dependant on the data. In many cases our incoming `data` could be mixed and the challenge includes we sort through it.


## Solutions

Our first solution actually doesn't complete this challenge, but it does complete a few of the test cases.

```js
function bananas(data){
  const type = typeof data
  return type
}
```