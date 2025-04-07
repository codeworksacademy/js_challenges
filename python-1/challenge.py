greetings = ['Hello World!', '¡Hola Mundo!', 'Hallo Welt!', 'Nǐ hǎo shìjiè!']

def hello_world(string):
  if string == 'english':
    return "Hello World!"
  if string == 'spanish':
    return "¡Hola Mundo!"
  if string == 'german':
    return "Hallo Welt!"
  if string == 'chinese':
    return "Nǐ hǎo shìjiè!"
  return "👋🌎"
