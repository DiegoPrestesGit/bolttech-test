import { createUserMongo, findUserByEmailMongo } from '../handlers/user.js'
import bcrypt from 'bcrypt'
import { checkUserExists } from './utils.js'

export const createUser = async (request, response) => {
  const { email, name, password } = request.body

  const user = await checkUserExists(email)
  if (user) return response.json({ message: 'user e-mail already taken!' })

  const salt = bcrypt.genSaltSync(2)
  const hashedPassword = bcrypt.hashSync(password, salt)

  const newUser = await createUserMongo(email, name, hashedPassword)

  return response.json(newUser)
}

export const findUserByEmail = async (request, response) => {
  const { email } = request.query
  const user = await findUserByEmailMongo(email)

  return response.json(user)
}

export const loginV1 = async (request, response) => {
  const { email, password } = request.query
  const user = await findUserByEmailMongo(email)

  if (!user) response.status(404).json({ message: 'user not found' })

  const isPasswordCorrect = bcrypt.compareSync(password, user.password)

  if (!isPasswordCorrect)
    return response.status(401).json({ message: 'invalid password' })

  return response.status(200).json(user)
}
