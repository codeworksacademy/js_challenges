# Instructions  

**Key Maker**

### Description

"There is a bulding, inside this building, there is a level where no elevator can go and no stair can reach.
This level is filled with doors. These doors lead to many places, hidden places; but one door is special. One door leads to the source. This building is protected by very secure system. Every alarm triggers the bomb...."
Bomb? Who brought a bomb into this? I just wanted to teach about the importance of keys in objects.

You will start with a very large object. Then given a specific value as an argument, it will be your job to find that value in the object and return the *key* that holds the *value*. It's like accessing an object in reverse. In addition if the 'building' does not contain the value given, null should be returned.

```javascript
let building = {
  lobby: 'shoot-out',
  dojo: 1997,
  ...
}
function keyMaker(source){

  
}

keyMaker('shoot-out') // -> 'lobby'
```

**example Output:**
```
1 lobby
```
- 'shoot-out' is the value when accesing 'lobby'