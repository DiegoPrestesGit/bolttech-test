import {
  createProjectMongo,
  findAllProjectsMongoByUserId,
  findUserByEmailMongo
} from '../handlers/mongo.js'

const checkUserExists = email => findUserByEmailMongo(email)

export const createProject = async (request, response) => {
  try {
    const { userEmail, name } = request.body

    if (!(await checkUserExists(userEmail)))
      return response.json({
        message: "the user you are trying to add a project doesn't exist!"
      })

    const newProject = await createProjectMongo(userEmail, name)
    return response.json(newProject)
  } catch (err) {}
}

export const findAllProjectsByUserId = async (request, response) => {
  const { userEmail } = request.query

  if (!(await checkUserExists(userEmail)))
    return response.json({
      message: "the user you are trying to add a project doesn't exist!"
    })

  const projects = await findAllProjectsMongoByUserId(userEmail)
  return response.json(projects)
}
