# Instructions  

### **Grimtol**

*Far over the misty mountains cold*

*To dungeons deep and caverns old*

*We must away ere break of day*

*To seek the pale enchanted gold.*
### Description

Dwarfs for centuries have spoke of a sparwling dungeon under the castle of Grimtol. A stone maze full of winding paths and stairs, rumored to hold the souls of those who've gotten lost in it's cold halls. The fear of loosing one's self has left the ruin ripe for looting. You've been approached by some of these adventurers with the oppurtunity to share in Grimtol's untapped wealth in exchange for help determining how deep the dungeon is and the treasuer it contains. You being the wise wizard you are, know you could get the number of floors and all the treasure within by casting a couple of `recursive` spells, so you agree. 

You will have access to a matrix of arrays (Grimtol's Dungeon Floors) and will be required to determine how *deep* the deepest *floor* is. Here is an example.
```javascript
const Grimtol = [[],[[],[💎]],[]]
```
in this example, the deepest floor is on the 3rd floor down, or the 3rd array layer. But we aren't just looking for how many floors there are, we are looking for 💎 too. Consider the next example.
```javascript
const Grimtol = [[💎],[[],[💎],💎],[💎]]
```
in this example there are still 3 floors, but there is also 4 💎. If we take the deepest floor number and the count of 💎, multipling them together we get `12`. 


**example Output:**

- 3 is the number depth of array layers, and 4 is the number of 💎 in the dungeon total. These multiplied together gives us our answer of `12`. yet that is just a practice, Grimtol's mysteries are much more profound.