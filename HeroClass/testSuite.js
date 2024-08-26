// Hints are all displayed based on a run count follow a format of more helpful the further down the list you go.
// Keep code examples out of the hints but do use code language or links to MDN docs for things they might need
const hints = [

]

// Write a solution to the challenge here in plain JS
class HeroSolution {
  constructor(name, health) {
    this.name = name
    this.health = health
    this.maxHealth = health
    this.exp = 0
  }

  get healthPercent() {
    return Math.round((this.health / this.maxHealth) * 100)
  }

  get level() {
    if (this.exp >= 500) return 5
    if (this.exp >= 300) return 4
    if (this.exp >= 150) return 3
    if (this.exp >= 50) return 2
    return 1
  }
}


// export out the function to be visible in the console
const solution = HeroSolution.toString()

// here is where you can write the multiple test cases for the challenge

function testSuite(test, challenge) {
  //format follows: challange(<actual input sent to the students function>), expected output, given input)
  // try to come up with atleast 5
  //for more challenge try to mix up data types

  const slate = new challenge('Slate Slabrock', 25)
  const swift = new challenge('Swift Ironstag', 15)


  test(slate.name, 'Slate Slabrock', `slate.name | 'Slate Slabrock'`)
  test(slate.health, 25, `slate.health, 25 | 25`)
  test(slate.maxHealth, 25, `slate.maxHealth | 25`)

  test(swift.name, 'Swift Ironstag', `swift.name | 'Swift Ironstag'`)
  test(swift.exp, 0, `swift.exp | 0`)

  test(slate.healthPercent, 100, `slate.healthPercent | '100'`)
  slate.health -= 10
  test(slate.healthPercent, 60, `slate.healthPercent | '60'`)
  slate.health -= 5
  test(slate.healthPercent, 40, `slate.healthPercent | '40'`)
  slate.health += 12
  test(slate.healthPercent, 88, `slate.healthPercent | '88'`)

  test(swift.level, 1, `swift.level | 1`)
  swift.exp += 49
  test(swift.level, 1, `swift.level | 1`)
  swift.exp += 50
  test(swift.level, 2, `swift.level | 2`)
  swift.exp += 175
  test(swift.level, 3, `swift.level | 3`)
  swift.exp += 175
  test(swift.level, 4, `swift.level | 4`)
  swift.exp += 65
  test(swift.level, 5, `swift.level | 5`)


}