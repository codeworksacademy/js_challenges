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
  while (creatures.length) {
    let current = creatures[0]
    arrows -= current.hp * current.count

    if (arrows <= 0) {
      return current.name
    }

    creatures.shift()
  }
  return 'A RED SUN RISES. BLOOD HAS BEEN SPILLED THIS NIGHT'
}

export const solution = legolasOrcLiquidator.toString()



export function testSuite(test, challenge) {

  const balrog = [
    { name: 'Orcs', count: 25, hp: 2 },
    { name: 'Goblins', count: 100, hp: 1 },
    { name: 'Oliphaunts', count: 2, hp: 15 },
    { name: 'Balrog', count: 1, hp: 50 }
  ]
  const goblins = [
    { name: 'Orcs', count: 40, hp: 2 },
    { name: 'Goblins', count: 50, hp: 1 },
    { name: 'Oliphaunts', count: 3, hp: 15 },
    { name: 'Balrog', count: 0, hp: 50 }
  ]
  const victory = [
    { name: 'Orcs', count: 50, hp: 2 },
    { name: 'Goblins', count: 50, hp: 1 },
    { name: 'Oliphaunts', count: 2, hp: 15 },
    { name: 'Balrog', count: 1, hp: 50 }
  ]

  test(challenge(185, balrog), 'Balrog', [185, balrog])
  test(challenge(100, goblins), 'Goblins', [100, goblins])
  test(challenge(250, victory), 'A RED SUN RISES. BLOOD HAS BEEN SPILLED THIS NIGHT', [250, victory])

}