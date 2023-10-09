import { Router } from 'express'
import { validateUserSessionMiddleware } from './user.js'
import { Project } from './db.js'
import { defaultSequelizeErrorHandling, validateDateFormat } from './utils.js'

const router = Router()

// create project
router.post('/project', validateUserSessionMiddleware, async (req, res) => {
    try {
        const { userEmail, name, startDate, endDate } = req.body

        if(!userEmail || userEmail === null) return res.status(400).json({message: 'userEmail must be provided'})
        if(!name || name === null) return res.status(400).json({message: 'the project name must be provided'})

        const validateStartDate = validateDateFormat(startDate)
        if(!validateStartDate.valid) return res.status(400).json(validateStartDate)
        if(endDate !== null && endDate) {
            const validateEndDate = validateDateFormat(endDate)
            if(!validateEndDate.valid) return res.status(400).json(validateEndDate)
        }

        await Project.create({userEmail, name, startDate, endDate})

        return res.status(201).json({userEmail, name, startDate, endDate})
    } catch (error) {
        defaultSequelizeErrorHandling(res, error)
    }
})

// find user projects by email
router.get('/project/:userEmail', validateUserSessionMiddleware, async (req, res) => {
    try {
        const { userEmail } = req.params

        if(!userEmail || userEmail === null) return res.status(400).json({message: 'userEmail must be provided'})

        const projects = await Project.findAll({
            where: {
                userEmail
            }
        })

        return res.status(200).json(projects)
    } catch (error) {
        defaultSequelizeErrorHandling()
    }
})

// edit a project
router.put('/project/:id', validateUserSessionMiddleware, async (req, res) => {
    try {
        const {id} = req.params
        const {userEmail, name, startDate, endDate} = req.body

        if(!id) return res.status(400).json({message: 'id of the project must be provided'})

        if(!userEmail || userEmail === null) return res.status(400).json({message: 'userEmail must be provided'})
        if(!name || name === null) return res.status(400).json({message: 'the project name must be provided'})

        const validateStartDate = validateDateFormat(startDate)
        if(!validateStartDate.valid) return res.status(400).json(validateStartDate)
        if(endDate !== null && endDate) {
            const validateEndDate = validateDateFormat(endDate)
            if(!validateEndDate.valid) return res.status(400).json(validateEndDate)
        }

        const project = await Project.findOne({
            where: { id }
        })
        if(!project) return res.status(404).json({message: 'project not found'})

        await Project.update({ userEmail, name, startDate, endDate }, {where: {id}})

        return res.status(200).json({
            message: 'updated successfully',
            projectUpdated: {
                userEmail,
                name,
                startDate,
                endDate
            }
        })
    } catch (error) {
        defaultSequelizeErrorHandling()
    }

})

// delete a project
router.delete('/project/:id', validateUserSessionMiddleware, async (req, res) => {
    try {
        const {id} = req.params

        if(!id) return res.status(400).json({message: 'id of the project must be provided'})

        const dbDeleteCount = await Project.destroy({where: {id}})

        if(dbDeleteCount > 0) {
            return res.status(200).json({message: 'project deleted'})
        } else {
            return res.status(404).json({message: 'project not found'})
        }
    } catch (error) {
        defaultSequelizeErrorHandling()
    }
})

export default router

