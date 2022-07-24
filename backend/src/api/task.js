import { createTaskMongo, findTaskByProjectMongo } from '../handlers/task.js'
import {
  checkUserExists,
  validateDates,
  checkProjectExists,
  checkUserIsProjectOwner
} from './utils.js'

export const createTask = async (request, response) => {
  try {
    const { userEmail, taskData } = request.body

    if (!(await checkProjectExists(userEmail, taskData.projectId)))
      return response.json({
        message: "the project you are trying to add a task doesn't exist!"
      })

    if (!validateDates(taskData.startDate, taskData.finishDate))
      return response.json({
        message: 'invalid dates: the startDate is bigger than the finishDate'
      })

    if (!(await checkUserExists(userEmail)))
      return response.json({
        message: "the user you are trying to add a project doesn't exist!"
      })

    const newTask = await createTaskMongo(userEmail, taskData)
    return response.json(newTask)
  } catch (err) {}
}

export const findAllTasksByProject = async (request, response) => {
  try {
    const { userEmail, projectId } = request.query

    const project = await checkProjectExists(projectId)

    if (project === null)
      return response.json({
        message: "the project you are trying to add a task doesn't exist!"
      })

    if (!checkUserIsProjectOwner(userEmail, project))
      return response.json({
        message: 'this user is not the owner of this project!'
      })
    const tasks = await findTaskByProjectMongo(projectId)

    return response.json(tasks)
  } catch (err) {}
}

export const updateTaskById = async (request, response) => {}

export const deleteTaskById = async (request, response) => {}
