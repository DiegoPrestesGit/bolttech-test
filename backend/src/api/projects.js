import { createProjectMongo, findUserByEmailMongo } from '../handlers/mongo.js'

// export const findAll = async (request, response) => {
//   const { email, name, password } = request.body
//   const newUser = await create(email, name, password)

//   return response.json(newUser)
// }

export const createProject = async (request, response) => {
  try {
    const { userEmail, name } = request.body

    const userExists = await findUserByEmailMongo(userEmail)
    if (!userExists)
      return response.json({
        message: "the user you are trying to add a project doesn't exist!"
      })

    const newProject = await createProjectMongo(userEmail, name)
    return response.json(newProject)
  } catch (err) {}
}
