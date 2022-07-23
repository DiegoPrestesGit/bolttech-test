import { Router } from 'express'
import { createUser, getUserById } from '../api/user.js'

const userRouter = Router()

userRouter.post('/create', createUser)
userRouter.get('/find/:id', getUserById)

export default userRouter
