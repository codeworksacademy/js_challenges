export const hints = [
  'You are going to need two totals',
  'be sure to multiply the force and power',
  'Remember to add each individual units computed amount to the total',
  'The output must be a string',
  'Good Luck!!!'
]

function battle(forces) {
  let goodTotal = 0
  let evilTotal = 0
  forces.forEach(unit =>{
    const unitForce = unit.power * unit.troops
     unit.alignment == 'good'
      ? goodTotal += unitForce
      : evilTotal += unitForce
  })

  if(goodTotal == evilTotal){
    return 'There will be no victor on this battle field'
  }
  return goodTotal > evilTotal 
    ? 'Good triumphs over Evil'
    : 'Evil eradicates all trace of Good'
}

export const solution = battle.toString()