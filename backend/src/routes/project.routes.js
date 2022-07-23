import { Router } from 'express'

import { createProject } from '../api/projects.js'

const projectRouter = Router()

projectRouter.post('/create', createProject)
projectRouter.get('/find-all', (req, res) => res.json({ TODO: 'IMPLEMENT' }))
projectRouter.put('/modify', (req, res) => res.json({ TODO: 'IMPLEMENT' }))
projectRouter.delete('/remove', (req, res) => res.json({ TODO: 'IMPLEMENT' }))

export default projectRouter
