from challenge import *

def test_suite():
  yield hello_world, 'Hello World!', 'english'
  yield hello_world, '¡Hola Mundo!', 'spanish'
  yield hello_world, 'Hallo Welt!', 'german'
  yield hello_world, 'Nǐ hǎo shìjiè!', 'chinese'
  yield hello_world, '👋🌎', 'asl'
  yield hello_world, '👋🌎', 'gibberish'