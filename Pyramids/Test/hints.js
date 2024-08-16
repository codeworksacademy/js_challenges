export const hints = [
  'Start small solve the first example',
  'Look for a pattern',
  'Create 3 variables to keep track off the height used bricks and bricks needed for the next layer',
  'Use a while loop... and check if you have enough bricks for the nextLayer before allowing the loop to progress',
  'Always increment the height by 1',
  'Keep track of the bricks used, and reduce them from the totalBricks',
  'remember to update your nextLayer',
  'return a number',
  'Good Luck!!!'
]

function pyramid(totalBricks) {
  let height = 0
  let usedBricks = 0
  let nextLayer = 1

  while (totalBricks >= nextLayer) {
    height += 1
    usedBricks = height * 1
    totalBricks -= usedBricks
    nextLayer = usedBricks + 1
  }
  return height
}

export const solution = pyramid.toString()