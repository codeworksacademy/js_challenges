import fs from 'fs'
import state from './state.json'

export function saveState(key, value) {
  let data = state || {}
  data[key] = value
  fs.writeFile('./Test/state.json', JSON.stringify(data), (err) => { if (err) console.log(err) })
}

export function getState(key) {
  let data = state || {}
  let value = data[key]
  if (value) return value
  if (!value) return null
}

export function clearState(key) {
  let data = state || {}
  delete data[key]
  fs.writeFile('./Test/state.json', JSON.stringify(data), (err) => { if (err) console.log(err) })
}