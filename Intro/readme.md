# Intro

Welcome to the CodeWorks challenges! This is the first of many code challenges designed to work you brain out, solving complex problems. At first they may not seem so tough but after a while some time they will turn into real "brain-melters".

As you progress through these challenges you will build up a working knowledge of problem solving skills that will help you solve much larger real world problems.

Let's take a look at our environment really quick before we get started. In this current frame you have these `instructions`, and the `webview`. These can be toggled using the buttons at the top. While in the `webview` you can access the `developer console` with the 🔧 button. And run your code using the `run` button. Speaking of code, in the other frame you will see a almost blank canvas for you to write the code meant to complete each challenge. You will also see some options zoom the webview in and out, and *frame* elements if your challenge includes and `html`. There is also a `Reset` button in the very bottom left of the window, if you want to erase your code and start over.

Each challenge is unique and can come with many different *inputs*, *params*, *variables* or even multiple *functions*. These will be key to completing these challenges and should not be modified. You will however add to code that is there.

```js
// --- Starting challenge.js
let num1 = 5

function challenge(num2){

}
```

```js
// --- Example of what you should do ✅
let num1 = 5

function challenge(num2){
  let sum = num1 + num2 // ++ added code into function
  return sum // ++
}
//---

```

```js
// --- Example of what you should NOT do ❌
let five = 5 // *modified variable* 

function addFive(x){ // *modified function name, and parameter*
  let sum = five + x // ++ 
}
```

If you modify the name of any starting variables or functions, you might still receive a desired result from your function. But *our* code that runs to verify your solution will not work, and you will fail to pass the challenge.


## Instructions

On to our challenge. Like many first steps, this one is special. It has `3` different functions for you to solve. Each of them logically are pretty straight forward, they are more for you to get used to working with **functions** witch a **return** that gives us back the result.

```js
function sum(num1, num2){
  return num1 + num2 // this value gets return to the *caller*
}
let total = sum(10, 5) // *call* total = 15
```

console logs are cool for us developers, being able to **return** a value to a function caller like `total` is much cooler.


### 1. Add 10

Given a number as your **input** add `10` to that number and **return** the sum.
```js
number = 10 // solution expected = 20
```

### 2. Double it

Given a number as your **input**, doubles it's value, and **return** the doubled value.
```js
input = 10 // solution expected = 20
input = -5 // solution expected = -10
```

### 3. This "and" That

Given `2` string variables, add them together with the string `and` separating them.
```js
string1 = 'this' 
string2 = 'that' // solution expected = 'this and that'

string1 = 'this' 
string2 = 'the other' // solution expected = 'this and the other'
```

## References

[MDN functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

[MDN Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_parameters)

[MDN return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)


## Solution

What is there to learn here? Maybe a little about utilizing **variables** and **parameters**, but also that even the simplest of problems can seem tricky when you're just getting started. 

The **return** word is also a key to all of these solutions. While we are just getting started understanding the importance of functions that **return** values opens up our 

### 1. Add 10

Just out side the function for `addTen()` there is a *variable* called `number`. one solution could be to take this variable, add `10` to it and return that value.

```js
let number = 10
function addTen(){
  return number + 10
}
```
While it doesn't matter in this test, you would want to be careful modifying the value of `number`

```js
let number = 10
function addTen(){
  return number += 10 // the = here means that not only did you add 10 you also modified the original value of number
  // number = 20
}
```

What is funny about this test though is that it is so limited in scope, it doesn't even know if you are using the `number` variable and it doesn't really care either. You could just return `20` and the tests will be happy without any math being done at all.

```js
let number = 10
function addTen(){
  return 20
}
```

### 2. Double it

Double introduces the **parameter**. It is pretty uncommon for these challenges to only have one solution. Instead their solution could change based on a changing input, like in the problem. 

Our code will actually run `doubleIt()` **2** times, each time providing `input` with a value. `10` first, then `-5` a second time. It's important you use the `input` parameter in your solution so your function could be used multiple times.

- On the first run, `input = 10` and the expected solution should be `20`
- On the second run, `input = -5` and the expected solution should be `-10`.

You don't have to change your code for each run, your function should work for both of these inputs. Here we just take the input and *multiply it by 2 as part of the **return**

```js
function doubleIt(input){
  return input * 2
}
```
This will return both of the desired solutions.

What might be better though is to start getting into the practice of creating more verbose code.

```js
function doubleIt(input){
  let double = input * 2
  return double
}
```

Why add in the extra line? isn't that inefficient? The quick answer is no. The long answer is; it's easy to think that less lines of code, the better the quality that code is. However, **verbose** code or more *readable* is easier to understand. By creating a variable with our intentions in mind, we can read the variable without having to figure out the expression taking place. Plus most of the time, no efficient is lost anyways.

```js
// This would pass the tests. Is it readable?
let doubleIt = i => i * 2
```

### 3. This "and" That

Why not mix it up, taking a little from challenge 1 and a little from challenge 2?

This time we have a **variable** `string1` on the outside and **parameter** `string2` on the inside of our function, the **variable** value will stay the same between our runs, but the **parameter** value will change between each. Same as the last challenge our code will not change between the two runs, our solution should work in both cases.

```js
let string1 = 'this'
function thisAndThat(string2) {
  let combined = string1 + ' and ' + string2
  return combined
}
```

Maybe one of the tricks here is we expect you to add the spaces in between the *strings* and our `" and "`. 