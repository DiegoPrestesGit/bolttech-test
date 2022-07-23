import { Router } from 'express'
import { createUser, getUserByEmail } from '../api/user.js'

const userRouter = Router()

userRouter.post('/create', createUser)
userRouter.get('/find', getUserByEmail)

export default userRouter
