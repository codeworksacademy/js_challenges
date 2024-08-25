# Instructions  

**⚔️ Hero Class**

### Description

Ready to become a hero? you will need the all the right properties for that to be true!

Have you seen a *getter*? Sometimes, it is desirable to allow access to a property that returns a dynamically computed value, or you may want to reflect the status of an internal variable without requiring the use of explicit method calls. In JavaScript, this can be accomplished with the use of a getter. [MDN Getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

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
slateHammer.sellValue // this will calculate and give us the value 100
```

Now let's say our hero has been busy using this hammer, and it's condition has gone down. We could modify the `condition` to poor and the next time we access `sellValue` the value will be *re-calculated* and we would only get `25`. The is preferred to having the sellValue be a fixed amount on the class as a standard property, cause then we would need to manage both the `condition` and `sellValue`. What if the hammer was enchanted by a wizard? another situation where the `sellValue` would be effected, but by making this property a `getter` we do not need to adjust the `sellValue`, it will be calculated for us the next time it's used.

```js
// Starting value
slateHammer.sellValue // <= 100

// 🧌🧌🧌💥🔨 the condition changes
slateHammer.condition = 'poor'
slateHammer.sellValue // <= 25 is now returned with only modifying the condition

// 🧙‍♂️🪄🔨 enchanting the hammer
slatHammer.magic = true
slateHammer.sellValue // <= 50 
```

With *getters* we can create much more dynamic properties on our classes.

Lets create a class for a `Hero`. The `Hero` will have a `4` standard properties (name, health, maxHealth and experience). We also want to create `2` different getters for the `Hero`.
 - `healthPercent`, a getter that returns a whole integer % out of 100 for the remaining health if the hero ever takes damage. For example, if the `health` starts at `10`, and the hero takes `3` damage, the `healthPercent` should return `70%`.
 - `level`, a getter that returns the current level of the `Hero`. Levels work like this; All heros start a with ` 0 exp`, this is level `1`, and should return `1`. If the hero accrues `50 exp` the hero will be level `2`. All `exp` values `0` through `49` the hero is still level `1`.

| Level | Experience Range    |
|-------|---------------------|
| 1     | 0 - 49              |
| 2     | 50 - 149            |
| 3     | 150 - 299           |
| 4     | 300 - 499           |
| 5     | 500+                |


