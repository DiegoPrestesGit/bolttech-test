import { Router } from 'express'
import { createUser, findUserByEmail } from '../api/user.js'

const userRouter = Router()

userRouter.post('/create', createUser)
userRouter.get('/find', findUserByEmail)

export default userRouter
