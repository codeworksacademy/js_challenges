# Hello World

## Instructions

You'll be creating a function that takes a `language` as a string and returns the "hello world" greeting in that language. If the language isn't available, you'll return the string `"👋🌎"` instead.

```python
language = 'english'  # should return 'Hello World'
language = 'spanish'  # should return '¡Hola Mundo'
```

## Skills

This challenge will help you learn how to access data from lists and dictionaries, and how to use conditions to make decisions in your code. Let's dive into some solutions!

## Solution

### Using Conditions with a List

In this approach, we store greetings in a list and use `if` statements to return the corresponding greeting based on the language.

Think of the list `greetings` as a shelf with different books on it, each labeled with a language. We use `if` statements to decide which "book" to take based on the language you ask for.

```python
def hello_world(language):
    greetings = [
        'Hello World!', '¡Hola Mundo!', 'Hallo Welt!', 'Nǐ hǎo shìjiè!'
    ]
    if language == 'english':
        return greetings[0]
    elif language == 'spanish':
        return greetings[1]
    elif language == 'german':
        return greetings[2]
    elif language == 'chinese':
        return greetings[3]
    else:
        return "👋🌎"
```


### Using Only `If` Statements

This method works by testing one condition after another. If a condition is true, it returns the corresponding greeting and skips the rest.

This solution uses a series of `if` statements where we keep checking each condition. It's like asking, "Is it English?", then "Is it Spanish?", and so on. If none match, we return the default greeting.

```python
def hello_world(language):
    greetings = [
        'Hello World!', '¡Hola Mundo!', 'Hallo Welt!', 'Nǐ hǎo shìjiè!'
    ]
    if language == 'english':
        return greetings[0]
    if language == 'spanish':
        return greetings[1]
    if language == 'german':
        return greetings[2]
    if language == 'chinese':
        return greetings[3]
    return "👋🌎"
```


### Using a Dictionary

A dictionary is like a magic treasure box where you stick a label (the language) and get the corresponding treasure (the greeting) instantly. The `get` method is great because if the label isn't there, it hands you a default treasure: `"👋🌎"`.

Here's a super efficient way to map each language directly to its greeting using a dictionary.

```python
def hello_world(language):
    greetings = {
        'english': 'Hello World!',
        'spanish': '¡Hola Mundo!',
        'german': 'Hallo Welt!',
        'chinese': 'Nǐ hǎo shìjiè!'
    }
    return greetings.get(language, '👋🌎')
```


### Wrap-Up

All these approaches do the same thing: they match a language to its "hello world" greeting. Whether you're working with lists and conditions or using a handy dictionary, you're building skills that are foundational in programming. Keep experimenting and have fun coding!