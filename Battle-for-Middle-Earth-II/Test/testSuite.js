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