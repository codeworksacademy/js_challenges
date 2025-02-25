# Hero Class ⚔️  


> Ready to become a hero? you will need the all the right properties for that to be true!

## Instructions

Have you seen a *getter*? Sometimes, it is desirable to allow access to a property that returns a dynamically computed value, or you may want to reflect the status of an internal variable without requiring the use of explicit method calls. In JavaScript, this can be accomplished with the use of a getter. 

[MDN Getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

The benefit of getters is that we can create more dynamic properties in our classes, without having to increase any overhead by managing that more complex data. Lets look at an example.

```js
class Item{
  constructor(name, condition, magic){
    this.name = name // Stone battle hammer
    this.condition = condition // poor
    this.magic = magic // false
  }

  get sellPrice(){
    let goldValue = 0
    if(this.condition == 'poor') goldValue += 25
    if(this.condition == 'good') goldValue += 100
    if(this.condition == 'like new') goldValue += 500
    if(this.magic == true) goldValue *= 2
    return goldValue
  }
}

const slateHammer = new Item('Stone Hammer of bludgeoning', 'good', false)
```

Along with the `4` standard properties on our item (name, type, rarity, magic), we will have another property called `sellPrice`. The thing is, `sellPrice` doesn't have a fixed value to it. Whenever our code tries to access the `sellPrice` it will invoke like a function and *calculate* a value.

```js
slateHammer.sellPrice // this will calculate and give us the value 100
```

Now let's say our hero has been busy using this hammer, and it's condition has gone down. We could modify the `condition` to poor and the next time we access `sellPrice` the value will be *re-calculated* and we would only get `25`. The is preferred to having the sellPrice be a fixed amount on the class as a standard property, cause then we would need to manage both the `condition` and `sellPrice`.

 What if the hammer was enchanted by a wizard? another situation where the `sellPrice` would be effected, but by making this property a `getter` we do not need to adjust the `sellPrice`, it will be calculated for us the next time it's used.

```js
// Starting value
slateHammer.sellPrice // <= 100

// 🧌🧌🧌💥🔨 the condition changes
slateHammer.condition = 'poor'
slateHammer.sellPrice // <= 25 is now returned with only modifying the condition

// 🧙‍♂️🪄🔨 enchanting the hammer
slatHammer.magic = true
slateHammer.sellPrice // <= 50 
```

With *getters* we can create much more dynamic properties on our classes.

### The challenge at hand

Lets create a class for a `Hero`. The `Hero` will have a `4` standard properties (`name`, `health`, `maxHealth` and `exp`-experience). We also want to create `2` different getters for the `Hero`.
 - `healthPercent`, a getter that returns a whole integer % out of 100 for the remaining health if the hero ever takes damage. For example, if the `health` starts at `10`, and the hero takes `3` damage, the `healthPercent` should return `70` %.
 - `level`, a getter that returns the current level of the `Hero`. Levels work like this; All heros start a with ` 0 exp`, this is level `1`, and should return `1`. If the hero accrues `50 exp` the hero will be level `2`. All `exp` values `0` through `49` the hero is still level `1`.

| Level | Experience Range    |
|-------|---------------------|
| 1     | 0 - 49              |
| 2     | 50 - 149            |
| 3     | 150 - 299           |
| 4     | 300 - 499           |
| 5     | 500+                |

## Skills

*Getters* are a key part of software development and can be used in just about any application. Being able to calculate complex values based off makes our data easier to maintain.

## Solution


### Constructor

First lets make our class constructor. The hero takes in *two* values, a `name` and `health`, but a `Hero` need *four* properties; `name`, `health`, `maxHealth` and `exp`. We can create the `Hero` without needing to take in the additional two pieces of data because they can be assumed. 

The constructor runs when the `Hero` is first constructed. We can make some safe assumptions about the class based on the instructions. `maxHealth` can just be the same as `health` and `exp` always starts at `0`. Because the incoming `health` is a *primitive data type, a *number*, the `health` and `maxHealth` will be two separate properties with just the same starting value.


```js
  constructor(name, health) {
    this.name = name
    this.health = health
    this.maxHealth = health
    this.exp = 0
  }
```

### Get healthPercent

This one should be pretty simple, but we will need to do some formatting to make sure the value we *get* out is formatted as a whole integer.
To get the percent of health remaining, we can calculate the `health` divided by `maxHealth`, this will give us a decimal however like `0.77756`.
We want to make this number fit in the range `0-100`, so we take our decimal and multiple it by `100`, this would give us `77.756`. Lastly to make it a whole number, we can use the `Math.round()` method, and put all of our math *inside* `.round()` as an argument. *Don't forget your parenthesis!*

```js
  get healthPercent() {
    return Math.round((this.health / this.maxHealth) * 100)
  }
```
### Get level

To get the level, we can create a descending set of conditions, each checking the range above them. Starting with level `5` since it's so broadly `500+`. If it's not level `5`, we check if it's level `4`, or if `exp` is over `300`. Then for level `3`, if `exp` is over `150` and so on. By structuring our `if` conditions in this manner, we can easily check for *ranges* of values without having to explicitly call each range out in each `if`

```js
  get level() {
    if (this.exp >= 500) return 5
    if (this.exp >= 300) return 4
    if (this.exp >= 150) return 3
    if (this.exp >= 50) return 2
    return 1
  }
```


### Whole class solution
```js
class Hero{
  constructor(name, health) {
    this.name = name
    this.health = health
    this.maxHealth = health
    this.exp = 0
  }

  get healthPercent() {
    return Math.round((this.health / this.maxHealth) * 100)
  }

  get level() {
    if (this.exp >= 500) return 5
    if (this.exp >= 300) return 4
    if (this.exp >= 150) return 3
    if (this.exp >= 50) return 2
    return 1
  }
}
```
