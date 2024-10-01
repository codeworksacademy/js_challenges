# Bananas  

## Instructions

> *Grown in more than 150 countries, it is widely believed there are more than 1, 000 types of bananas in the world, which are subdivided into 50 groups.*

Thankfully code is not so complex, at least when it comes to *`data` types*. In fact, we can write a function to identify the types of data passed to it.

 You will be given a piece of `data` as a *parameter* and it is your job to determine the type *`data`*. We don't actually care what the value of the `data` is we are just trying to figure out it's *type*. `'Hello'` would be a `string`, `38` would be `number`, `true` a `bool` and many more.

 > 🧩 hint: you will want to start with the built-in `typeof` 

 ### References

 [MDN typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

 [MDN isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

 [MDN instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)

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

Our first solution actually doesn't complete this challenge, but it does complete most of the test cases.

At first that doesn't seem to bad, it's not very much code and it solves most issues, but then if we look at the output of our console and we see why it failed them, it become clear something is up.

```js
function bananas(data){
  const type = typeof data
  return type
}
```

When `{banana: "sandwich"}`, `null`, `[1,2,3]`, and `Error()` are passed in, they **all** return `'object'`. Or in other words the `typeof` each of those is `'object'`. *What!? Even `[1,2,3]` is type `'object'`?* . 

**Yes**, *technically* this is true, all of these types are *derived* from the `object` type. So to cover all those other cases we need a few special checks.

```js
function bananas(data){
  if(data === null){
    return 'null'
  }
  if(Array.isArray(data)){
    return 'array'
  }
  if(data instanceof Error){
    return 'error'
  }
  const type = typeof data
  return type
}
```

We can check for null explicitly Use the static `Array` method `isArray` and the built-in `instanceof` to see if our `'object'` was created using the `Error` *contructor*.

