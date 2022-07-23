// import { findAll, createProject, modifyProject, removeProject } from '../handlers/mongo.js'

export const findAll = async (request, response) => {
  const { email, name, password } = request.body
  const newUser = await create(email, name, password)

  return response.json(newUser)
}

export const createProject = async (request, response) => {
  const { email } = request.query
  const user = await findUserByEmail(email)

  return response.json(user)
}
