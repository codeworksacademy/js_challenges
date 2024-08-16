# Instructions  

**Matching Combos**

### Description

Given an array of numbers, return any numbers that are the sum two `different` numbers in the array. *see this example below*
```javascript
const nums = [4, 8, 12, 16, 20] // => [12,16,20]
```
in this example `[12,16,20]` would be the expected output. 4+8=12, 4+12=16, and 8+12=20.

- only include each number one time, if multiple combos result in the same number **do not** duplicate it within the output array
- if there are no combos, then return an empty array
