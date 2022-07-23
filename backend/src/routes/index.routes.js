import { Router } from 'express'

import projectRouter from './project.routes.js'
import userRouter from './user.routes.js'

const router = Router()

router.use('/user', userRouter)
router.use('/project', projectRouter)

export default router
