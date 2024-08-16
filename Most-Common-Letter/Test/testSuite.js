export function testSuite(test, challenge) {

  let zoom = 'zoom'
  let twoRoads = 'Two roads diverged in a wood, and I took the one less traveled by'
  let dream = 'But a dream within a dream?'
  let nevermore = 'And my soul from out that shadow that lies floating on the floor Shall be lifted—nevermore!'

  test(challenge(zoom), 'o', zoom)
  test(challenge(twoRoads), 'o', twoRoads)
  test(challenge(dream), 'a', dream)
  test(challenge(nevermore), 'o', nevermore)

}