import { Router } from 'express'

import {
  createProject,
  findAllProjectsByUserId,
  updateProjectById,
  deleteProjectById
} from '../api/projects.js'

const projectRouter = Router()

projectRouter.post('/create', createProject)
projectRouter.get('/find-all', findAllProjectsByUserId)
projectRouter.put('/modify', updateProjectById)
projectRouter.delete('/remove', deleteProjectById)

export default projectRouter
