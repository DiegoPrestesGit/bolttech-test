import {Router} from 'express'
import {User} from './db.js'
const router = Router()

// create user
router.post('/user', async (req, res) => {
    try {        
        const {email, password} = req.body

        if (email === null || !email) return res.status(400).json({message: 'not sending email'})
        if (password === null || !password) return res.status(400).json({message: 'not sending password'})

        await User.create({email, password})

        return res.status(201).json({message: 'user created'})    
    } catch (error) {
        defaultSequelizeErrorHandling(res, error)
    }
})

// find user by email
router.get('/user', async (req, res) => {
    try {
        const { email } = req.query

        const user = await User.findOne({where: {
            email
        }})

        if (!user) {
            return res.status(404).json({message: 'user not found'})
        }

        return res.json(user)
    } catch (error) {
        defaultSequelizeErrorHandling(res, error)
    }
})

router.post('/user', (req, res) => {

})

// create user session
router.post('/user/auth', (req, res) => {
    
})

// invalidate user session
router.post('/user/auth', (req, res) => {
    
})

const defaultSequelizeErrorHandling = (res, error) => {
    if(error.name.startsWith('Sequelize')) {
        const errors = error.errors.map(e => ({
            field: e.path,
            message: e.message,
        }))
        return res.status(400).json({message: 'sequelize error', errors })
    }
    return res.status(500).json({message: 'internal server error'})
}

export default router

