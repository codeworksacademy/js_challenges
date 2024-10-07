// -- Update the function below as needed. 
// -- Do not change the name of the function
// -- Do not modify the matchUrl variable

/**  example of a  player data
{
  playerName: "Yubi🧘",
  wins: 10,
  losses: 5,
  ties: 1,
  penalties: 0,
  id: 1
}
*/

const kopUrl = 'https://sandbox.codeworksacademy.com/api/kop/match-history'

async function kingOfPong() {
  const response = await fetch(kopUrl)
  const data = await response.json()
  console.log('data', data)
  let winner = data[0]
  data.forEach(player => {
    if (winner.wins <= player.wins) {
      winner = player
    }
  })
  return winner.playerName
}


async function kingOfVirtue() {
  const response = await fetch(kopUrl)
  const data = await response.json()
  let virtuePlayer = data[0]
  data.forEach(player => {
    if (player.penalties > 0) return
    if (virtuePlayer.wins <= player.wins) {
      virtuePlayer = player
    }
  })
  return virtuePlayer.playerName
}