import mongoose from 'mongoose'

export const startMongo = async () => {
  console.log('\nTRYING TO CONNECT TO MONGO')

  const connection = await mongoose.connect(
    'mongodb://localhost:27017/bolttech'
  )

  console.log('MONGO CONNECTED')
  return connection
}
