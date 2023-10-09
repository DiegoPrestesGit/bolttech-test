import jwt from 'jsonwebtoken'

import {Router} from 'express'
import {User} from './db.js'
import {JWT_SECRET} from './constants.js'
import { defaultSequelizeErrorHandling } from './utils.js'
const router = Router()

const jwtBlacklist = []

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

// create user session
router.post('/session', async (req, res) => {
    try {
        const {email, password} = req.body

        const user = await User.findOne({where: {email}})

        if(!user) return res.status(404).json({message: 'user does not exist'})
        if(password !== user.password) return res.status(401).json({message: 'wrong password'})

        const token = jwt.sign({email, valid: true}, JWT_SECRET, {expiresIn: '24h'})
        res.status(201).json({message: 'token created', token: `Bearer ${token}`})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'internal server error'})
    }
})

// invalidate user session
router.post('/session/invalidate', (req, res) => {
    jwtBlacklist.push(req.authorization.split(' ')[1])

    res.status(203).json({message: 'token successfully revoked'})
})

export const validateUserSessionMiddleware = (req, res, next) => {
    const fullToken = req.headers.authorization

    if(!fullToken) return res.status(401).json({message: 'no token provided'})

    const [_, token] = fullToken.split(' ')

    if(jwtBlacklist.indexOf(token) !== -1) return res.status(401).json({message: 'token revoked'})

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if(err) return res.status(401).json({message: 'failed to authenticate'})
        if(decoded.exp < Math.floor(Date.now() / 1000)) return res.status(401).json({message: 'token expired'})

        console.log(decoded)
        req.user = decoded.email
        next()
    })

}

export default router

