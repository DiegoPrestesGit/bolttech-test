import Project from '../model/Project.js'
import User from '../model/User.js'

// findAll, createProject, modifyProject, removeProject

export const createUserMongo = async (email, name, password) => {
  try {
    const findUser = await findUserByEmailMongo(email)
    if (findUser.message) return { message: 'User already exists' }

    const newUser = User({ email, name, password }).save()
    return newUser
  } catch (err) {
    throw Error('error when saving user in database')
  }
}

export const findUserByEmailMongo = async email => {
  try {
    const user = await User.find({ email })
    if (user == null) return { message: "User doesn't exists" }

    return user
  } catch (err) {
    throw Error('error when trying to find the user in database')
  }
}
