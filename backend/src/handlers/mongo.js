import User from '../model/User.js'

export const create = async (email, name, password) => {
  try {
    const newUser = User({ email, name, password }).save()
    return newUser
  } catch (err) {
    throw Error('error when saving user in database')
  }
}
