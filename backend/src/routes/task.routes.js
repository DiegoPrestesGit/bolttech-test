import { Router } from 'express'

import {
  createTask,
  deleteTaskById,
  findAllTasksByProject,
  updateTaskById
} from '../api/task.js'

const taskRouter = Router()

taskRouter.post('/create', createTask)
taskRouter.get('/find-all', findAllTasksByProject)
taskRouter.put('/modify', updateTaskById)
taskRouter.delete('/remove', deleteTaskById)

export default taskRouter
