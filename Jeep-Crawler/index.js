require = require('esm')(module)
module.exports = require('./Test/main.js')
const { getDb, clearState } = require('./Test/store.js')

// functions for the instructor to call later
async function stats() {
  let data = await getDb()
  console.log('💾', data)
}
async function reset() {
  await clearState('ALL')
  stats()
}
