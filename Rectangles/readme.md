# Rectangles

> *I have four sides, but I’m not a square, Two sides are longer, a different pair. I can stand tall or lie down flat, What am I?*

## Instructions

Introducing JavaScript *classes* this challenge will have you taking a class definition for a rectangle and creating properties to support a `width`, `height` and calculate an area.

*Classes* are a template for creating objects. They encapsulate data with code to work on that data. They can be quite versatile and allow us better control over the data in our applications.

[MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

Look a this example of a cat below. The *class* `Cat` has a constructor, that takes in `3` parameters; name, color and age. This constructor takes those arguments and *builds* an instance of a `Cat`. We can create a new instance of a `Cat` by using the `new` keyword. This is like invoking a function but the return gives us back a super powered object by taking the parameters and assigning them to *itself* (this). *"`This` cat's name is 'Garfield'. `This` cat's color is Orange"...*

```js
class Cat{
  constructor(name, color, age){
    this.name = name
    this.color = color
    this.age = age
    this.likesLasagna = true
  }

  meow(){
    console.log(`${this.name} meows 🐱`)
  }
}

let garfield = new Cat('Garfield', '#FFA500', 8)

```

This code would give us back an *classed* object that would look similar to this when broken down

```js
// garfield
Cat {
  name: 'Garfield',
  color: '#FFA500',
  age: 8,
  likesLasagna: true,
  meow: f()
}

```

One obvious trick is that the Cat has `4` properties to it, even though it only took in `3` (name, color, age). When we can make certain assumptions about our data, like how cats like lasagna, we don't have to include this as part of the constructor, it's effectively *defaulted* to true by the constructor. This value could change down the line, but when a cat is created, `likesLasagna` is assumed to be `true`.

What about that `meow` though, what is going on there? `meow` is a *method*. That's right just like `.forEach` or `.filter` on an array. We can create give our classes functions that belong directly to them, and are invoked bye them.

```js
arr.forEach(num => console.log(num)) // invoking a built in method on arrays

garfield.meow() // invoking our custom method, we created in the Cat class
```
Now lets get back to the challenge (insert segway from lasagna to rectangles).

We have started the instance of a class for you, but we want you to add in the properties for the `height`, `width`, `area` and a method called `checkSquare`. This `checkSquare` method should return `true` if the rectangle is also a square (`width` and `length` are equal), and `false` if it is not a square.


## Skills

Right now classes probably feel alien, but they are a crucial aspect to programming in any language. Building classes will be the new defacto standard for any `object` we want to work with. Classes give form to our app's functionality, and allow us to build more predictable patterns.


## Solution

Class *members* are built using the `constructor` function. This `constructor` *builds* the instance of the class. In our `constructor` we want to assign values to a `height`, `width` and `area` property to our `Rectangle` instance. This will fulfill the first set of test casesW.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height
    this.width = width
    this.area = height * width
  }
}
```

Class *methods* are *functions* that exist on class instances, this is useful cause the *method* will have access to the other *members* of the class instance. We can create a `checkSquare` *method*, that has access to the `height` and `width` of each rectangles *instance*. Each `Rectangle` will have it's own `height` and `width` to check, and will use it's own `height` and `width` properties.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height
    this.width = width
    this.area = height * width
  }

    checkSquare() {
    return this.height === this.width
  }
}

```
