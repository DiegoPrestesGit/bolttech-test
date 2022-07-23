import { Router } from 'express'
// import { createUser, getUserByEmail } from '../api/project.js'

const projectRouter = Router()

projectRouter.post('/create', (req, res) => res.json({ TODO: 'IMPLEMENT' }))
projectRouter.get('/find-all', (req, res) => res.json({ TODO: 'IMPLEMENT' }))
projectRouter.put('/modify', (req, res) => res.json({ TODO: 'IMPLEMENT' }))
projectRouter.delete('/remove', (req, res) => res.json({ TODO: 'IMPLEMENT' }))

export default projectRouter
