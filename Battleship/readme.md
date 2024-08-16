# Instructions  

**Battleship**

### Description

A Game most are familiar with call out a location and your opponent will let you know if you hit or miss. But what if we could find where the ship is before we fired our expensive millitary rockets and wasting taxpayer money?  Well that's up to you!

Given a Grid (array matrix) of 0s and a single 1. 0 representing open water and 1 the enemy ship. Return the coordinates of that ship.

```javascript
function radarPing(sea){
  
}

radarPing([[0,0,0],[1,0,0],[0,0,0]]) // -> A2
```

**example Output:**
```
   A,B,C
1 [0,0,0]
2 [1,0,0]
3 [0,0,0]

```
- the ship is in the column *A* and row *2* so return `A2`