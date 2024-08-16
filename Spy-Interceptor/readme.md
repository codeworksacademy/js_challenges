# Instructions  

**Spy Interceptor**

### Description

Since you did so well finding the last spy, you've been hired again. This the higher ups tell you they believe there is a mole within leaking information from the open Wifi network. They tried to "back trace" the signal but it was protected and instead of finding a device they recieved a set of coded instructions.

You will be supplied a static array of `devices` on the network and the coded `instructions` as an argument. Your `instructions` represent partions of devices on the network. Either `<` or `>`, each representing a half of the network devices. `<` meaning the front partition and `>` meaning the back. look at the example below.

```javascript
const devices = ['🧔📱', '👧📱', '👷‍♂️💻', '🕵️‍♂️📷', '🧙‍♂️🔮', '👸💻']

fucntion intercept(instructions){
  ...
}
intercept(['<', '<', '>']) // => '👧📱'
```
Each instruction selects one partition made up of half the devices array (rounding up on odds) to select and keep, while the other is discarded. Note below as the highlighted array is the partition that is selected and kept for the next instruction.

**example Output:**

>1 `'<'` `['🧔📱', '👧📱', '👷‍♂️💻']`  '🕵️‍♂️📷', '🧙‍♂️🔮', '👸💻'
>
>2`'<'` `['🧔📱', '👧📱']` '👷‍♂️💻'  
>
>3 `'>'` '🧔📱' `['👧📱']`

once there is only device left in the array, the mole `👧📱` has been found.
> *⚠ the instruction set may need to repeat until a device is singled out.*
