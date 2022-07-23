import User from '../model/User.js'

export const createUserMongo = async (email, name, password) => {
  try {
    const findUser = await findUserByEmailMongo(email)

    if (findUser) return { message: 'User already exists' }

    const newUser = await User({ email, name, password }).save()
    return newUser
  } catch (err) {
    throw Error('error when saving user in mongoDB')
  }
}

export const findUserByEmailMongo = async email => {
  try {
    const user = await User.findOne({ email })
    if (user == null) return undefined

    return user
  } catch (err) {
    throw Error('error when trying to find the user in mongoDB')
  }
}
