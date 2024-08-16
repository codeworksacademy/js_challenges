# Instructions  

**6174**

Kaprekar constant, or 6174, is a constant that arises when you take almost any 4-digit integer, form the largest and smallest numbers from its digits, and then subtract these two numbers. Continuing with this process of forming and subtracting, You will always arrive at the number 6174.

The only exceptions to this rule are numbers with all repeating digits such as 7777 since these would always equal 0. 

Once you solve the test cases feel free to come up with any of your own four digit numbers and see how many iterations it takes to wind up at 6174.

The goal of this challenge is to return the total number of iterations required to convert the number into Kaprekars Constant.  


```javascript
function Kaprekar(num){
 
}

Kaprekar(4520) // outputs: 7
```

EXAMPLE INPUT: 

1: 5420   -   0245 = 5,175
2: 7551   -   1557 = 5,994
3: 9954   -   4599 = 5,355
4: 5553   -   3555 = 1,998
5: 9981   -   1899 = 8,082
6: 8820   -   0288 = 8,532
7: 8532   -   2358 = 6,174
  