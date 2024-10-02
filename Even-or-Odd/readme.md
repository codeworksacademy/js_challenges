# Even or Odd  

## Instructions

Given any whole *number* as the *parameter* `num`, **return** the *string* `'even'` or `'odd'` appropriately.

```javascript
num = 2 // => 'even'
num = 3 // => 'odd'
num = 24 // => 'even'
num = -151 // => 'odd'
```

## References

[MDN Remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)

[MDN Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

[MDN Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

## Skills

While trivial, finding the even or odd can be expanded to *once every x*. This can be the start of many practical examples; automatic event scheduling every x days, determining a which players turn it is in a turn based game, applying styles to alternating rows of data, or load balancing heavy compute actions betweens different machines.

## Solution

This is one of those challenges that actually seems impossible if you don't know the *trick*. The trick being the `%` *remainder* operator. This operator *wholly* divides the left side by the right side and gives use the *remainder* of the division. 

```js
20 % 14 = 16
20 % 3 = 2
5 % 3 = 2
8 % 2 = 0
```

The importance of this operator and this problem is that any `'even'` number is *wholly* divisible by `2`. So any even number evaluated against this math will always and result in `0`. Inversely any `'odd'` number will always return `1`.

```js
 2 % 2 = 0
 22 % 2 = 0
 47 % 2 = 1
```
In JavaScript `1` is considered *truthy* and `0` *falsy*, so we can actually use this expression as a *condition* for an `if` statement that returns both desired values.

```js
function evenOrOdd(num){
  if(num % 2){ // odd numbers eval to 1:truthy, while even to 0:falsy
    return 'odd'
  } else {
    return 'even'
  }
}
```

This can actually be shorted much smaller code if we use the a *ternary* statement

```js
function evenOrOdd(num){
  return num % 2 ? 'odd' : 'even'
}
```