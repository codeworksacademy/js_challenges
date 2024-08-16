# Instructions  

**Jeep Crawler**

### Description

Summer has come, new tires are on the jeep and before you are some rocks begging to be conqoured. 

Given a string of "_" trails and "#" rocks, determine if you jeep can make it through the trail. Some rules to consider. Your jeep can be considered as a size of `4`. And adjacent '#' count as one rock with a size of the count of '#' touching. eg. '#' is a size of 1. '####' is a size of 4 and '#######' is a size of 7. The trail will be made of many rocks, if any are larger than your jeep you will get stuck and cannot continue. return `true` if you jeep can crawl the trail or `false` if it cannot.

```javascript

function jeepCrawler(input){
  
}

jeepCrawler('___#__##____####_##__##_###_#_') // -> true
```

**example Output:**
```
1 true
```
- none of the rocks are `larger` than 4, the size of your jeep.