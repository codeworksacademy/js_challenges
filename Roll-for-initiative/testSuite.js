// Hints are all displayed based on a runcount follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
export const hints = [
  'You could use .map to give each creature an initiative property',
  'Check if there is a bonus before you try and access it or you will get errors',
  "If you have a multiple line .map, don't forget your return inside",
  'Sort your newly mapped array by the initiative property',
  'You can use .map again to get just an array of the creatures names'
]

// Write a solution to the challenge here in plain JS
function rollForInitiative(creatures) {
  let initiatives = creatures.map(c => {
    c.initiative = c.roll
    c.initiative += Math.floor((c.dexterity - 10) / 2)
    if (c.bonus) c.initiative += parseInt(c.bonus.score)
    return c
  })
  initiatives.sort((a, b) => b.initiative - a.initiative)
  let names = initiatives.map(init => init.name)
  return names
}

// export out the function to be visible in the console
export const solution = rollForInitiative.toString()

// here is where you can write the multiple test cases for the challenge
let combat1 = [
  {
    name: 'Willam Briarbrick',
    dexterity: 11,
    roll: 15,
    bonus: {
      score: '+3',
      source: 'Remarkable Athlete'
    }
  },
  {
    name: 'Thud the Ogre',
    dexterity: 8,
    roll: 13
  }
]

let combat2 = [
  {
    name: 'Slade Slabrock',
    dexterity: 10,
    roll: 18
  },
  {
    name: 'Willam Briarbrick',
    dexterity: 11,
    roll: 13,
    bonus: {
      score: '+3',
      source: 'Remarkable Athlete'
    }
  },
  {
    name: 'Thud the Ogre',
    dexterity: 8,
    roll: 20
  },
  {
    name: 'Grommash Heckyell',
    dexterity: 12,
    roll: 5,
    bonus: {
      score: '+2',
      source: 'Dread Ambusher'
    }
  }
]
let combat3 = [
  {
    name: 'Gerald of Riverton',//11
    dexterity: 18,
    roll: 13,
    bonus: {
      score: '-5',
      source: 'Cursed Boots of Blaviken'
    }
  },
  {
    name: 'Slade Slabrock',//15
    dexterity: 10,
    roll: 15
  },
  {
    name: 'Willam Briarbrick', // 14
    dexterity: 11,
    roll: 13,
    bonus: {
      score: '+3',
      source: 'Remarkable Athlete'
    }
  },
  {
    name: 'Thud the Ogre', //13
    dexterity: 8,
    roll: 14
  },
  {
    name: 'Grommash Heckyell', // 19
    dexterity: 12,
    roll: 16,
    bonus: {
      score: '+2',
      source: 'Dread Ambusher'
    }
  }
]



export function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  test(challenge(combat1), ['Willam Briarbrick', 'Thud the Ogre'], combat1)
  test(challenge(combat2), ['Thud the Ogre', 'Slade Slabrock', 'Willam Briarbrick', 'Grommash Heckyell'], combat2)
  test(challenge(combat3), ['Grommash Heckyell', 'Willam Briarbrick', 'Slade Slabrock', 'Thud the Ogre', 'Gerald of Riverton'], combat3)

}