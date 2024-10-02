# Bang

## Instructions

> The sun is high, beaming down upon the withered earth just in the middle of a western down. Two gun slingers stand opposing each other. Only one can stay standing. 

Given two `strings`, `gun1`and `gun2` comprised of `_`s and `B,A,N,G`. return which gunslinger fired first (spelling out `'BANG'`), and walked away to tell the tale, if either. Return `1` if `gun1` fired first. Return `2` if `gun2` fired first. Return `0` if neither fired, or both fired at the same time.

How do we determine who fired first? 
- A *gun* has fired once `BANG` is **completely** spelled out
- both strings will always be the same length
- the letters `B,A,N,G` will always come in that order, but may not always be adjacent

```js
gun1 = '_______BANG'
gun2 = '_____BANG__'
//expected output => 2, gun2 finished firing first

gun1 = '_______BANG'
gun2 = '_______BAN_'
//expected output => 1, gun2 never finished firing
```

## Skills

Searching through two sets of data simultaneously is incredibly handy. Searching for breaks in patterns. Finding commonly used sequences of words or characters in user data. Validating a log of events occurring in desired order. Comparing a sequence of actions from players in a game.

 Hopefully, like many challenges, some out of the box thinking. It might seem like trying to spell out `'BANG'` for each `gun` is the solution to this problem, however that will be cumbersome to evaluate. So can we find another condition to check for that happens once `'BANG'` is spelled?


## Solutions

This first solution doesn't complete each test. But it does show that we can solve a few of them without doing exactly what the instructions ask of us, and does give us correct answers.

First we iterate over both the strings. The instructions indicate that the strings will be the same length. This means we can iterate over them using the same loop. Pulling `char1` from the `gun1` string and `char2` from `gun2`.

Now instead of trying to spell `'BANG'` fully for both *guns* we are just going to see who starts first, or where the first `'B'` is.

We compare `char1` and `char2` to see if they are different, if they are, we can check to see if it's `char1` that is `'B'` or if it must be `char2`.

```js
function bang(gun1, gun2) {
  for (let i = 0; i < gun1.length; i++) {
    let char1 = gun1[i]
    let char2 = gun2[i]
    if (char1 !== char2) {
      if (char1 == 'B') {
        return 1
      } else {
        return 2
      }
    }
  }
}
```

This code tells us who *started* to fire first, and for some cases this is also who was expected to walk away. But some of our cases, the `'BANG'` spread out and our code doesn't work for those.

It isn't too much different to accommodate these new cases though. Instead of searching for the first `'B'`, now we search for the first `'G'`. Again, not actually trying to spell `'BANG'` entirely. Because of the rules set, `'G'` always marks a *gun* has fired.

Now we check for if a `char` is `'G'` while the other isn't. If `char1` is `'G'` and `char2` is not, `gun1` fired first. The inverse is true for `gun2`.

If both `char`s are `'G'` at the same time, still neither `if` will run, and the loop will eventually end. At the end we **return** `0`, in case neither `gun` included a `'G'` before the other `gun`, we **return** our *default* result of `0`. 

```js
  for (let i = 0; i < gun1.length; i++) {
    let char1 = gun1[i]
    let char2 = gun2[i]
    if (char1 == 'G' && char2 != 'G') {
      return 1
    }
    if (char2 == 'G' && char1 != 'G') {
      return 2
    }
  }
  return 0
```

