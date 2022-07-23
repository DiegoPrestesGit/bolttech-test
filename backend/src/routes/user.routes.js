import { Router } from 'express'
import { makeUserController as userController } from '../factory/controller-factory.js'

const userRouter = Router()

userRouter.post('/create-user', userController.create)
userRouter.get('/get-user/:id', userController.getUserById)

export default userRouter
