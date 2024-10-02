# Spare Change  

## Instructions

Given an **array** of `coins`, and a *number* for an item `price` as *parameters*, **return** `true` or `false` on whether you have enough coins to purchase the item. The *array* will always be come in the same order and have the same length. Each position in the *array* represents how many of each corresponding coin you have, `[nickles, dimes, quarters]`.

```js
coins = [2, 1, 3] // 2 nickles, 1 dime, 3 quarters add up to 0.95
price = 1.25 // with this price and .95 in change, the expected return => false
```
## Skills 

This one seems very money oriented but it's can work as a conversion calculator for anything. How much product do we need based on pledge tiers in a *kickstarter*. How much memory do we have on our compute clusters? What is the value of my rare card collection?

## Solution

Before you decide to toss in a for loop, take a look at your data. Yes it's an *array* of numbers, but each one of those number is supposed to be treated differently. So we don't want to repeat an action many times over. Our *array* is also fixed in length, and is very manageable in size. We should pull out each value individually based on *index*.

```js
function spareChange(coins, price){
  const nickles = coins[0]
  const dimes = coins[1]
  const quarters = coins[2]
}
```

This will give us how many of each coin we have as verbose *variables* we can use, but it doesn't give us the total value of our change we have. So lets do that.

```js
function spareChange(coins, price){
  const nickles = coins[0] * .05
  const dimes = coins[1] * .1
  const quarters = coins[2] *.25
  const pocketChange = nickles + dimes + quarters
}
```

We can modify the number of each coin we have into the value of coin, then add all those values together to get our total `pocketChange`. Then we can just **return** a comparison of our `pocketChange` and our item `price`.

````js
function spareChange(coins, price){
  const nickles = coins[0] * .05
  const dimes = coins[1] * .1
  const quarters = coins[2] *.25
  const pocketChange = nickles + dimes + quarters
  return pocketChange >= price
}
```