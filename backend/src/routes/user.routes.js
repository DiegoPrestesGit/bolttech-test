import { Router } from 'express'
import { createUser, findUserByEmail, loginV1 } from '../api/user.js'

const userRouter = Router()

userRouter.post('/create', createUser)
userRouter.get('/find', findUserByEmail)
userRouter.get('/login-v1', loginV1)

export default userRouter
