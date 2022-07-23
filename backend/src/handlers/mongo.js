import Project from '../model/Project.js'
import User from '../model/User.js'

// findAll, createProject, modifyProject, removeProject

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

export const createProjectMongo = async (userEmail, name) => {
  try {
    const project = await Project({ userEmail, name }).save()

    return project
  } catch (err) {}
}

export const findAllProjectsMongoByUserId = async userEmail => {
  try {
    const projects = await Project.find({ userEmail })
    return projects
  } catch (err) {
    throw Error('error when trying to find user projects in mongoDB')
  }
}
