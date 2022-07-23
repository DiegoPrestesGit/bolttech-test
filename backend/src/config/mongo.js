import mongoose from 'mongoose'
import User from '../model/User.js'

const mongoOptions = {
  reconnectionTries: 3,
  reconnectionInterval: 500,
  keepAlive: true,
  keepAliveInitialDelay: 300000
  // useNewUrlParser: true,
}

export const startMongo = async () => {
  console.log('\nTRYING TO CONNECT TO MONGO')

  const connection = await mongoose.connect(
    'mongodb://localhost:27017/bolttech'
  )

  console.log('MONGO CONNECTED')
  return connection
}

export const create = async (email, name, password) => {
  try {
    const newUser = User({ email, name, password }).save()
    return newUser
  } catch (err) {
    throw Error('error when saving user in database')
  }
}
