import { createUserMongo, findUserByEmailMongo } from '../handlers/user.js'
import bcrypt from 'bcrypt'
import { checkUserExists } from './utils.js'

export const createUser = async (request, response) => {
  try {
    const { email, name, password } = request.body

    const user = await checkUserExists(email)
    if (user) return response.json({ message: 'user e-mail already taken!' })

    const salt = bcrypt.genSaltSync(2)
    const hashedPassword = bcrypt.hashSync(password, salt)

    const { _id } = await createUserMongo(email, name, hashedPassword)

    return response.status(200).json({ email, name, _id })
  } catch (err) {
    return response.status(500).json({ message: 'error ;-;' })
  }
}

export const findUserByEmail = async (request, response) => {
  const { email } = request.query
  const user = await findUserByEmailMongo(email)

  return response.status(200).json(user)
}

export const loginV1 = async (request, response) => {
  try {
    const { email, password } = request.query
    const user = await findUserByEmailMongo(email)

    if (!user) response.status(404).json({ message: 'user not found' })

    const isPasswordCorrect = bcrypt.compareSync(password, user.password)

    if (!isPasswordCorrect)
      return response.status(401).json({ message: 'invalid password' })

    const { name, _id } = user

    return response.status(200).json({ name, email, _id })
  } catch (err) {
    return response.status(500).json({ message: 'error ;-;' })
  }
}
