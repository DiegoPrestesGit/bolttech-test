import Task from '../model/Task.js'

export const createTaskMongo = async (userEmail, taskData) => {
  try {
    const project = await Task({ userEmail, ...taskData }).save()

    return project
  } catch (err) {}
}
