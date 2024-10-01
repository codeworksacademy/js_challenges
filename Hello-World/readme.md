# Hello World

## Instructions

The challenge function will be given a `language` `string` as a *parameter*, `return` the corresponding *"hello world"* in the language specified.

If the language is specified is not available, return the string `"👋🌎"` instead.

```javascript
language = 'english' //should return 'Hello World'
language = 'spanish' // should return 'Hola Mundo'
```

## Skills

Here is a great challenge on accessing data from an `array` and working with **conditions** While it's common to want to create a loop anytime we encounter an array it's not always the best option. Specifically when the data in the `array` never changes, and all the positions are easily referenced.

It's also important to understand *fallbacks*, or outputs for when we get inputs we didn't expect. What should we do then? It's usually important to do something.


## Solution

This problem can be solved in a couple different straight forward ways. 

The language passed in will always be a string, so it's important we create conditions that check against `'english'` not `english`. The difference may seem minor, but to **javascript** it's very important.

It's also important to understand how to access data from an array based on it's position or **index**. Arrays hold data based on this value. The first items position for example is **index** `0`, the second `1`, third `2` and so on.

Lastly, what if they passed a language we didn't anticipate? or if it wasn't included in our array? We can create a *fallback* or a **return** that works as a catchall for anything we didn't check for.

```js
let greetings = [
  'Hello World!', '¡Hola Mundo!', 'Hallo Welt!', 'Nǐ hǎo shìjiè!']

function helloWord(language){
  if(language == 'english'){
    return greetings[0]
  } else if (language == 'spanish'){
    return greetings[1]
  } else if (language == 'german'){
    return greetings[2]
  } else if (language == 'chinese'){
    return greetings[3]
  } else {
    return "👋🌎"
  }
}
```
An alternative solution is to only use if statements. This works because the **return** of a function will *end the function** on that line. Our function would not run any subsequent `if` statments after any returns.

```js
function helloWord(language){
  if(language == 'english'){
    return greetings[0]
  } 
  if (language == 'spanish'){
    return greetings[1]
  }
  if (language == 'german'){
    return greetings[2]
  }
  if (language == 'chinese'){
    return greetings[3]
  }
  return "👋🌎"
}
```

Another solution that works very well for limited ranges of inputs are `switch` statements. Switch statements take in a single value as a `case` and run the following code. The simplicity of `switches` makes them seem like the preferred method to solve any problem with multiple *inputs* like this one, and for this problem it probably is the best. However, `switches` can only take in one *value*, they should not be used for any *conditionals* or large ranges of inputs, which is often needed with more complex problems.

```js
function helloWorld(language){
  switch(language){
    case 'english' : return greetings[0]
    case 'spanish' : return greetings[1]
    case 'german' : return greetings[2]
    case 'chinese' : return greetings[3]
    default: return '👋🌎'
  }
}
```




  