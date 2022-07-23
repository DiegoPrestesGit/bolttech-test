import { create, findUserByEmail } from '../handlers/mongo.js'

export const createUser = async (request, response) => {
  const { email, name, password } = request.body
  const newUser = await create(email, name, password)

  return response.json(newUser)
}

export const getUserByEmail = async (request, response) => {
  const { email } = request.query
  const user = await findUserByEmail(email)

  return response.json(user)
}
