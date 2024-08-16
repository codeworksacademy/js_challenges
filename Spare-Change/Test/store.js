import Client from '@replit/database'
const db = new Client()

export async function saveState(key, value) {
  await db.set(key, value)
  return value
}

export async function getState(key) {
  const value = await db.get(key)
  if (!value) return null
  return value
}

export async function clearState(key) {
  if (key == 'ALL') {
    await db.empty()
    return
  }
  await db.delete(key)
  return
}

export async function showDb() {
  let data = await db.getAll()
  console.log(data)
  return
}

export async function getDb() {
  let data = await db.getAll()
  return data
}