export function testSuite(test, challenge) {

  test(challenge('racecar'), true, 'racecar')
  test(challenge('tacocat'), true, 'tacocat')
  test(challenge('kayak'), true, 'kayak')
  test(challenge('banana'), false, 'banana')
  test(challenge('noon'), true, 'noon')
  test(challenge('deep'), false, 'deep')
  test(challenge('rotator'), true, 'rotator')
  test(challenge('nope'), false, 'nope')
  test(challenge('wow'), true, 'wow')

}