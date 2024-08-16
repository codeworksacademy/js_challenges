export function testSuite(test, challenge) {

  const aardvark = 'aardvark'
  const eel = 'eel'
  const voodoo = 'voodoo'

  test(challenge(aardvark, 'a'), 3, aardvark)
  test(challenge(aardvark, 'd'), 1, aardvark)
  test(challenge(eel, 'e'), 2, eel)
  test(challenge(voodoo, 'o'), 4, voodoo)

}