import User from '../model/User.js'

export const create = async (email, name, password) => {
  try {
    const newUser = User({ email, name, password }).save()
    return newUser
  } catch (err) {
    throw Error('error when saving user in database')
  }
}

export const findUserByEmail = async email => {
  try {
    const user = await User.find({ email })

    return user
  } catch (err) {
    throw Error('error when trying to find the user in database')
  }
}
