


async function* testSuite(test) {
  //for more challenge try to mix up data types
  const rectangle = new Rectangle(10, 7)
  const square = new Rectangle(5, 5)


  yield await test(function Rectangle(height, width, member) { return rectangle.width }, 7, 10, 7, 'width')
  yield await test(function Rectangle(height, width, member) { return rectangle.height }, 10, 10, 7, 'height')

  yield await test(function Rectangle(height, width, member) { return square.width }, 5, 5, 5, 'width')
  yield await test(function Rectangle(height, width, member) { return square.height }, 5, 5, 5, 'height')

  yield await test(function Rectangle(height, width, member) { return rectangle.area }, 70, 10, 7, 'area')
  yield await test(function Rectangle(height, width, member) { return square.area }, 25, 5, 5, 'area')

  if (typeof rectangle.checkSquare === 'function') {
    yield await test(function Rectangle(height, width, member) { return rectangle.checkSquare() }, false, 10, 7, 'checkSquare()')
  } else {
    yield await test(function Rectangle(height, width, member) { return rectangle.checkSquare }, false, 10, 7, 'checkSquare()')
  }

  if (typeof square.checkSquare === 'function') {
    yield await test(function Rectangle(height, width, member) { return square.checkSquare() }, true, 5, 5, 'checkSquare()')
  } else {
    yield await test(function Rectangle(height, width, member) { return square.checkSquare }, true, 5, 5, 'checkSquare()')
  }

  yield 'TEST:END'
}