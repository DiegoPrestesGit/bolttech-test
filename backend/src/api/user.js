import { createUserMongo, findUserByEmailMongo } from '../handlers/user.js'

export const createUser = async (request, response) => {
  const { email, name, password } = request.body
  const newUser = await createUserMongo(email, name, password)

  return response.json(newUser)
}

export const findUserByEmail = async (request, response) => {
  const { email } = request.query
  const user = await findUserByEmailMongo(email)

  return response.json(user)
}
