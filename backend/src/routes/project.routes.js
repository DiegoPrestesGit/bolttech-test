import { Router } from 'express'

import {
  createProject,
  findAllProjectsByUserId,
  updateProjectById
} from '../api/projects.js'

const projectRouter = Router()

projectRouter.post('/create', createProject)
projectRouter.get('/find-all', findAllProjectsByUserId)
projectRouter.put('/modify', updateProjectById)
projectRouter.delete('/remove', (req, res) => res.json({ TODO: 'IMPLEMENT' }))

export default projectRouter
