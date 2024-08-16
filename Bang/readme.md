# Instructions  

**Bang**

### Description

The sun is high, beaming down upon the withered earth just in the middle of a western down. Two gun slingers stand opposing eachother. Only one can stay standing. 

Given two strings comprised of `_`s and `B,A,N,G`. return which gunslinger fired first (spelling out BANG), and walked away to tell the tale.
- your input will be two strings as gun1 and gun2.
- both strings will always be the same length
- the BANG will never occur at the same time, someone will always be the victor
- the letters B,A,N,G will always come in that order, but may not allways be adjacent

```javascript
showdown(gun1, gun2){
  ...
}
```


**example Output:**
```
1 gun1 = _______BANG
2 gun2 = _____BANG__
  => 2
```
- since gun2's `BANG` occured first, `2` should be the returned
