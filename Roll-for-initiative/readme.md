# Instructions  

**Iniative Order**

### Description

Your party tried to sneak past but got caught. You tried to smooth talk you way out but you don't speak a common toungue. Blades are brandished and bows are drawn, combat is about to begin!

Given an array of creatures, determine their the order in which their turns will occur. Each character will have a name, a roll, dexterity, and some will have a bonus. To calculate an iniative score by which to sort, combine their roll and `dex modifier` ((dexterity -10) /2 rounded down) , then add any bonuses they posses. Then for the sake of simplicity, return an `array` containing *just* the `names` of the creatures in the order in which they will take their turns.

```javascript
let creatures = [
  {
    name: 'Willam Briarbrick',
    dexterity: 11,
    roll: 15,
    bonus: {
      score: '+3',
      source: 'Remarkable Athlete'
    }
  },
  {
    name: 'Thud the Ogre',
    dexterity: 8,
    roll: 13
  }
]

rollForIniative(creatures) // -> ['Willam Briarbrick', 'Thud the Ogre']
```
```
Willams iniiative score would be calculated as such
a roll of 15  => +15
((11 - 10)/2) => +0
bonus to roll => +3
---------------- 18

Thuds iniative score would be calculated as such
a roll of 13 => +13
((8 - 10)/2) => -1
no bonus     => +0
--------------- 12
```
for this example `['Willam Briarbrick', 'Thud the Ogre']` would be the expected return
 - don't forget, not every creature will have a bonus!