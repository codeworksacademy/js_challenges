# Instructions  

**Battle For Middle Earth II**

### Description

Let's be real, `Legolas` basically carried the entire team in those movies! 

Write a funtion that determines if `Legolas` has enough arrows to quell the tide of orcs, goblins, wargs and all the other evil creatures he will come in contact with. 

**Basic rule**

- 1 arrow deals 1 hp 

**Example**

1 arrow is needed for a goblin and 2 for an orc. However if there are 5 Orcs in a band Legolas would of course need to expend `2*5=10` arrows to take down the entire band of orcs. If Legolas does not have enough arrows to defeat the creatures they will slay him. 

**Output**

return the name of the creature that slayes Legolas, If Legolas survives the encounter return the string `"A RED SUN RISES. BLOOD HAS BEEN SPILLED THIS NIGHT"`

```js
function legolasOrcLiquidator(arrows, creatures) {
  // YOUR CODE GOES HERE

}

legolasOrcLiquidator(185, [
  { name: 'Orcs', count: 25, hp: 2 },
  { name: 'Goblins', count: 100, hp: 1 },
  { name: 'Oliphaunts', count: 2, hp: 15 },
  { name: 'Balrog', count: 1, hp: 50 }
]) // expect Balrog back

legolasOrcLiquidator(100, [
  { name: 'Orcs', count: 40, hp: 2 },
  { name: 'Goblins', count: 50, hp: 1 },
  { name: 'Oliphaunts', count: 3, hp: 15 },
  { name: 'Balrog', count: 0, hp: 50 }
]) // expect Goblins back
```

