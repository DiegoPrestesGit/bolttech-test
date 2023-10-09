import { Router } from 'express'
import { validateUserSessionMiddleware } from './user.js'
import { Task } from './db.js'
import { defaultSequelizeErrorHandling, validateDateFormat } from './utils.js'

const router = Router()

// create task
router.post('/task', validateUserSessionMiddleware, async (req, res) => {
    try {
        const { projectID, description, notes, startDate, endDate } = req.body

        if(!projectID || projectID === null) return res.status(400).json({message: 'projectID must be provided'})
        if(!description || description === null) return res.status(400).json({message: 'task description must be provided'})

        if(startDate !== null && startDate) {
            const validateStartDate = validateDateFormat(startDate)
            if(!validateStartDate.valid) return res.status(400).json(validateStartDate)
        }

        if(endDate !== null && endDate) {
            const validateEndDate = validateDateFormat(endDate)
            if(!validateEndDate.valid) return res.status(400).json(validateEndDate)
        }

        await Task.create({projectID, description, notes, startDate, endDate})

        return res.status(201).json({projectID, description, notes, startDate, endDate})
    } catch (error) {
        defaultSequelizeErrorHandling(res, error)
    }
})

// find tasks by project ID
router.get('/task/:projectID', validateUserSessionMiddleware, async (req, res) => {
    try {
        const { projectID } = req.params

        if(!projectID || projectID === null) return res.status(400).json({message: 'projectID must be provided'})

        const tasks = await Task.findAll({
            where: {
                projectID
            }
        })

        return res.status(200).json(tasks)
    } catch (error) {
        defaultSequelizeErrorHandling()
    }
})

// edit a task
router.put('/task/:id', validateUserSessionMiddleware, async (req, res) => {
    try {
        const {id} = req.params
        const {projectID, description, notes, startDate, endDate} = req.body

        if(!id) return res.status(400).json({message: 'id of the project must be provided'})

        if(!projectID || projectID === null) return res.status(400).json({message: 'projectID must be provided'})
        if(!description || description === null) return res.status(400).json({message: 'the task description must be provided'})

        if(startDate !== null && startDate) {
            const validateStartDate = validateDateFormat(startDate)
            if(!validateStartDate.valid) return res.status(400).json(validateStartDate)
        }

        if(endDate !== null && endDate) {
            const validateEndDate = validateDateFormat(endDate)
            if(!validateEndDate.valid) return res.status(400).json(validateEndDate)
        }

        const task = await Task.findOne({
            where: { id }
        })
        if(!task) return res.status(404).json({message: 'project not found'})

        const taskUpdated = {projectID, description, notes, startDate, endDate}
        await Task.update(taskUpdated, {where: {id}})

        return res.status(200).json({
            message: 'updated successfully',
            taskUpdated
        })
    } catch (error) {
        defaultSequelizeErrorHandling()
    }

})

// delete a task
router.delete('/task/:id', validateUserSessionMiddleware, async (req, res) => {
    try {
        const {id} = req.params

        if(!id) return res.status(400).json({message: 'id of the task must be provided'})

        const dbDeleteCount = await Task.destroy({where: {id}})

        if(dbDeleteCount > 0) {
            return res.status(200).json({message: 'task deleted'})
        } else {
            return res.status(404).json({message: 'task not found'})
        }
    } catch (error) {
        defaultSequelizeErrorHandling()
    }
})

export default router

