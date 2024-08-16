export function testSuite(test, challenge) {

  const reportedForces = [{
  race: 'Hobbits',
  troops: 4,
  power: 1,
  alignment: 'good'
},{
  race: 'Men',
  troops: 3,
  power: 2,
  alignment: 'good'
},{
  race: 'Elves',
  troops: 2,
  power: 3,
  alignment: 'good'
},{
  race: 'Dwarves',
  troops: 1,
  power: 3,
  alignment: 'good'
},{
  race: 'Eagles',
  troops: 0,
  power: 4,
  alignment: 'good'
},{
  race: 'Wizards',
  troops: 1,
  power: 10,
  alignment: 'good'
},{
  race: 'Orcs',
  troops: 5,
  power: 1,
  alignment: 'evil'
},{
  race: 'Men',
  troops: 8,
  power: 2,
  alignment: 'evil'
},{
  race: 'Wargs',
  troops: 3,
  power: 2,
  alignment: 'evil'
},{
  race: 'Goblins',
  troops: 5,
  power: 1,
  alignment: 'evil'
},{
  race: 'Uruk Hai',
  troops: 5,
  power: 3,
  alignment: 'evil'
},{
  race: 'Trolls',
  troops: 0,
  power: 5,
  alignment: 'evil'
},{
  race: 'Wizards',
  troops: 1,
  power: 10,
  alignment: 'evil'
}]
  const tiedForces = [{
    troops: 1,
    power: 5,
    alignment: 'good'
  },{
    troops: 1,
    power: 5,
    alignment: 'evil'
  }]
  const evilForces = [{
  race: 'Orcs',
  troops: 5,
  power: 1,
  alignment: 'evil'
},{
  race: 'Men',
  troops: 8,
  power: 2,
  alignment: 'evil'
},{
  race: 'Wargs',
  troops: 3,
  power: 2,
  alignment: 'evil'
},{
  race: 'Goblins',
  troops: 5,
  power: 1,
  alignment: 'evil'
},{
  race: 'Uruk Hai',
  troops: 5,
  power: 3,
  alignment: 'evil'
},{
  race: 'Trolls',
  troops: 0,
  power: 5,
  alignment: 'evil'
}]
  const goodForces = [{
  race: 'Hobbits',
  troops: 4,
  power: 1,
  alignment: 'good'
},{
  race: 'Men',
  troops: 3,
  power: 2,
  alignment: 'good'
},{
  race: 'Elves',
  troops: 2,
  power: 3,
  alignment: 'good'
},{
  race: 'Dwarves',
  troops: 1,
  power: 3,
  alignment: 'good'
},{
  race: 'Eagles',
  troops: 0,
  power: 4,
  alignment: 'good'
}]
  
  test(challenge(reportedForces), 'Evil eradicates all trace of Good', reportedForces)
  test(challenge(tiedForces), 'There will be no victor on this battle field', tiedForces)
  test(challenge(evilForces), 'Evil eradicates all trace of Good', evilForces)
  test(challenge(goodForces), 'Good triumphs over Evil', goodForces)

}