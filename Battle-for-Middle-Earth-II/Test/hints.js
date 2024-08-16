export const hints = [
  'Keep it simple... Do Math',
  'Remember to use the other type of loop',
  'Reduce the total arrows by multipling the hp and count',
  'Simply remove the creatures that have been eliminated from the array',
  'Only ever look at the first index of the array',
  'Remember, The output must be a string',
  'Good Luck!!!'
]

function legolasOrcLiquidator(arrows, creatures) {
    while(creatures.length){
    let current = creatures[0]
    arrows -= current.hp * current.count

    if(arrows <= 0){
      return current.name
    }
    
    creatures.shift()
  }
  return 'A RED SUN RISES. BLOOD HAS BEEN SPILLED THIS NIGHT'
}

export const solution = legolasOrcLiquidator.toString()