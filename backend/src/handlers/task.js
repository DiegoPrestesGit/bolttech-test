import Task from '../model/Task.js'

export const createTaskMongo = async (userEmail, taskData) => {
  try {
    const project = await Task({ userEmail, ...taskData }).save()

    return project
  } catch (err) {}
}

export const findTaskByProjectMongo = async projectId => {
  try {
    const tasks = await Task.find({ projectId })

    return tasks
  } catch (err) {}
}

export const updateTaskByIdMongo = async (_id, taskData) => {
  try {
    const task = await Task.findOneAndUpdate({ _id }, taskData)

    if (task === null) return undefined

    return taskData
  } catch (err) {}
}

export const deleteTaskByIdMongo = async _id => {
  try {
    const task = await Task.findOne({ _id })

    if (task === null) return { message: 'task not found' }

    const delationResponse = await Task.deleteOne({ _id })

    if (delationResponse.deletedCount === 0)
      return { message: 'error finding your task for delation' }

    return { message: 'task deleted successfully' }
  } catch (err) {}
}
