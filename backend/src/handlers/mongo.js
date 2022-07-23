import Project from '../model/Project.js'
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

const checkUserIsProjectOwner = (userEmail, project) =>
  project.userEmail === userEmail

export const createProjectMongo = async (userEmail, projectData) => {
  try {
    const project = await Project({ userEmail, ...projectData }).save()

    return project
  } catch (err) {}
}

export const findAllProjectsByUserIdMongo = async userEmail => {
  try {
    const projects = await Project.find({ userEmail })
    return projects
  } catch (err) {
    throw Error('error when trying to find user projects in mongoDB')
  }
}

export const updateProjectByIdMongo = async (userEmail, _id, projectData) => {
  try {
    const project = await Project.findOne({ _id })

    if (project === null) return undefined

    if (!checkUserIsProjectOwner(userEmail, project))
      return { message: 'this user is not the owner of the project!' }

    const updatedProject = { ...projectData, userEmail }
    await Project.updateOne(updatedProject)

    return updatedProject
  } catch (err) {}
}

export const deleteProjectByIdMongo = async (userEmail, _id) => {
  try {
    const project = await Project.findOne({ _id })

    if (project === null) return undefined

    if (!checkUserIsProjectOwner(userEmail, project))
      return { message: 'this user is not the owner of the project!' }

    const delationResponse = await Project.deleteOne({ _id })

    if (delationResponse.deletedCount === 0)
      return { message: 'error finding your project for delation' }

    return { message: 'project deleted successfully' }
  } catch (err) {}
}
