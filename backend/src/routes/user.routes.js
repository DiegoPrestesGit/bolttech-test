import { Router } from 'express'

const userRouter = Router()

userRouter.get('/get-user/:id', (req, res) => res.json({ fuck: 'this' }))

export default userRouter
