import { create } from '../config/mongo.js'

export const createUser = async (request, response) => {
  const { email, name, password } = request.body
  const newUser = await create(email, name, password)
  return response.json(newUser)
}

export const getUserById = async (request, response) => {
  return response.json({ oh: 'yet to implement' })
}
