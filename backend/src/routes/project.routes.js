import { Router } from 'express'

import { createProject, findAllProjectsByUserId } from '../api/projects.js'

const projectRouter = Router()

projectRouter.post('/create', createProject)
projectRouter.get('/find-all', findAllProjectsByUserId)
projectRouter.put('/modify', (req, res) => res.json({ TODO: 'IMPLEMENT' }))
projectRouter.delete('/remove', (req, res) => res.json({ TODO: 'IMPLEMENT' }))

export default projectRouter
