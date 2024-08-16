# Instructions  

**Battle For Middle Earth**

### Description

Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain 'worth' when battling against others. On the side of good we have the following races, with their associated worth:

**On the Good Side:**

```
Hobbits - 1,
Men - 2, 
Elves - 3, 
Dwarves - 3, 
Eagles - 4, 
Wizards - 10
ect..
```

**On the side of evil we have:**

```
Orcs - 1, 
Men - 2, 
Wargs - 2, 
Goblins - 1, 
Uruk Hai - 3, 
Trolls - 5, 
Wizards - 10
ect..
```

Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win the battle.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

**Input:**
The function will be given a single set of data, an array with the forces involved in the upcoming battle. You will need to determine the projected outcome of the battle based upon the troops multiplied by their power. Be sure to keep the totals seperate based upon the units alignment...

**Output:**

- Return if Good wins - `"Good triumphs over Evil"`
- if Evil Wins - `"Evil eradicates all trace of Good"`
- if Tied - `"There will be no victor on this battle field"`


```javascript
const reportedForces = [{
  race: 'Hobbits',
  troops: 4,
  power: 1,
  alignment: 'good'
},{
  race: 'Men',
  troops: 3,
  power: 2,
  alignment: 'good'
},{
  race: 'Elves',
  troops: 2,
  power: 3,
  alignment: 'good'
},{
  race: 'Dwarves',
  troops: 1,
  power: 3,
  alignment: 'good'
},{
  race: 'Eagles',
  troops: 0,
  power: 4,
  alignment: 'good'
},{
  race: 'Wizards',
  troops: 1,
  power: 10,
  alignment: 'good'
},{
  race: 'Orcs',
  troops: 5,
  power: 1,
  alignment: 'evil'
},{
  race: 'Men',
  troops: 8,
  power: 2,
  alignment: 'evil'
},{
  race: 'Wargs',
  troops: 3,
  power: 2,
  alignment: 'evil'
},{
  race: 'Goblins',
  troops: 5,
  power: 1,
  alignment: 'evil'
},{
  race: 'Uruk Hai',
  troops: 5,
  power: 3,
  alignment: 'evil'
},{
  race: 'Trolls',
  troops: 0,
  power: 5,
  alignment: 'evil'
},{
  race: 'Wizards',
  troops: 1,
  power: 10,
  alignment: 'evil'
}]
function battle(forces){
 
}

battle(reportedForces)
```

