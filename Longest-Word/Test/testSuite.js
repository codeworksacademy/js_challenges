export function testSuite(test, challenge) {

  test(challenge('Welcome to Jurrasic Park'), 'Jurrasic', 'Welcome to Jurrasic Park')
   
  test(challenge("I want to be the very best Like no one ever was To catch them is my real test To train them is my cause I will travel across the land Searching far and wide Each Pokemon to understand The power that's inside"), 'understand', "I want to be the very best Like no one ever was To catch them is my real test To train them is my cause I will travel across the land Searching far and wide Each Pokemon to understand The power that's inside")
    
}