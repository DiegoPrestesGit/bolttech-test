import { Router } from 'express'

const router = Router()

// create user
router.post('/project', (req, res) => {
    
})

// find projects of the user by email
router.get('/project/:email', (req, res) => {
    const { email } = req.params
    return res.json({email})
})

router.post('/user', (req, res) => {
    
})

// create user session
router.post('/user/auth', (req, res) => {
    
})

// invalidate user session
router.post('/user/auth', (req, res) => {
    
})

export default router

