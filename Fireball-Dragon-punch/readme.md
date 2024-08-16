# Instructions  

**Fireball Dragon-punch**

### Description

You're playing Fists of Fire on the arcade cabinet when another student smokes you. What?! The controller is broken or something, you were inputing special moves but nothing was happening, why was you character just crouching and jumping? This thing has got to have an error. When the match is over you decide to go into training mode and record some controller `inputs`. Each input is represented by one of the following characters `⬅ ➡ ⬆ ⬇ ↗ ↘ ↙ ↖ A B` or no input was given `_`. You look up a `guide` for the character's special moves and try them out, honing your moves. You notice that your input does not need to be perfectly timed to work. You determine there can be 2`__` delay in between each input and the character still performs the special move. After 3`___` any move is dropped as too much time has passed. Now with this new knowledge and practive, you wont be caught in the corner, hopefully.

You will be given a string of `inputs` and a `guide` of special moves. If a string of inputs line up with one of the special moves, track it as a move peformed. The return of the challenge should be an array of all the special moves performed during the inputs in order of which they occured. Take a look at the example below.

```javascript
const guide={
  '⬇↘➡A': 'fireball',
  '➡⬇↘A': 'dragon-punch',
  '⬇⬆B': 'flash-kick',
  '⬅➡A': 'sonic-boom'
}
'➡__➡⬇_↘➡A_A__AB⬇__⬆B' => ['fireball', 'flash-kick']
```
looking at the string closer

➡__➡`⬇_↘➡A`_A__AB`⬇__⬆B`

When evaluating these inputs, there are 2 special moves that take place. The rest is just considered regular moves which we don't care about (or are just mashing). Even though there is some delay `_` between the inputs, it's not too much delay that the game doesn't register the move. This particular string would return `['fireball', 'flash-kick']` as the answer.
