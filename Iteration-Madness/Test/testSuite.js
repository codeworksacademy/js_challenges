export function testSuite(test, challenge) {

  test(challenge([1], 1), 1, [[1], 1])
  test(challenge([10,15,25], 100), 2, [[10,15,25], 100])
  test(challenge([10,15,25], 1000), 20, [[10,15,25], 1000])
  test(challenge([100,100], 1000), 5, [[100,100], 1000])
  test(challenge([100,1000], 1000), 1, [[100,1000], 1000])
  

}