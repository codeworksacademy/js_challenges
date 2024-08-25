// Hints are all displayed based on a runcount follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
const hints = [

]

// Write a solution to the challenge here in plain JS
class RectangleSolution {
  constructor(height, width) {
    this.height = height
    this.width = width
    this.area = height * width
  }

  checkSquare() {
    return this.height == this.width
  }
}


// export out the function to be visible in the console
const solution = RectangleSolution.toString()

// here is where you can write the multiple test cases for the challenge

function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types
  const rectangle = new challenge(10, 7)
  const square = new challenge(5, 5)


  test(rectangle.height, 10, `new Rectangle(10,7).width  10`)
  test(rectangle.width, 7, `new Rectangle(10,7).height  7`)

  test(square.height, 5, `new Rectangle(5,5).width  5`)
  test(square.width, 5, `new Rectangle(5,5).height  5`)

  test(rectangle.area, 70, `new Rectangle(10,7).area  70`)
  test(square.area, 25, `new Rectangle(5,5).area  25`)

  test(rectangle.checkSquare(), false, `new Rectangle(10,7).checkSquare()  false`)
  test(square.checkSquare(), true, `new Rectangle(5,5).checkSquare()  true`)
}