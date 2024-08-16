// Hints are all displayed based on a runcount follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'You could use .map to give each creature an iniative property',
  'Check if there is a bonus before you try and access it or you will get errors',
  "If you have a multiple line .map, don't forget your return inside",
  'Sort your newly mapped array by the iniative property',
  'You can use .map again to get just an array of the creatures names'
]

// Write a solution to the challenge here in plain JS
function rollForIniative(creatures) {
  let iniatives = creatures.map(c => {
    c.iniative = c.roll
    c.iniative += Math.floor((c.dexterity - 10) / 2)
    if (c.bonus) c.iniative += parseInt(c.bonus.score)
    return c
  })
  iniatives.sort((a, b) => b.iniative - a.iniative)
  let names = iniatives.map(iniate => iniate.name)
  return names
}

// export out the function to be visible in the console
export const solution = rollForIniative.toString()