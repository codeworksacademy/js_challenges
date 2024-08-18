const hints = [
  'Use a variable to total up each of the numbers in the nums array',
  'Use a variable to keep track of your iterationCounts... This is not i',
  'There are more ways to loop than with the for loop',
  'Keep adding until your total is >= the target',
  'Now you start your for loop, and increment that total',
  'Outside of the for loop but inside the other loop... increment the iterations',
  'YOU GOT THIS!!!!'
]

function iterations(nums, target) {
  let total = 0
  let iterations = 0
  while (total < target) {
    for (let i = 0; i < nums.length; i++) {
      total += nums[i]
    }
    iterations++
  }
  return iterations
}

const solution = iterations.toString()

function testSuite(test, challenge) {

  test(challenge([1], 1), 1, [[1], 1])
  test(challenge([10, 15, 25], 100), 2, [[10, 15, 25], 100])
  test(challenge([10, 15, 25], 1000), 20, [[10, 15, 25], 1000])
  test(challenge([100, 100], 1000), 5, [[100, 100], 1000])
  test(challenge([100, 1000], 1000), 1, [[100, 1000], 1000])


}