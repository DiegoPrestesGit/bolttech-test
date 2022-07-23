import {
  createProjectMongo,
  findAllProjectsByUserIdMongo,
  findUserByEmailMongo,
  updateProjectByIdMongo,
  deleteProjectByIdMongo
} from '../handlers/mongo.js'

const checkUserExists = email => findUserByEmailMongo(email)
const validateDates = (startDate, finishDate) =>
  new Date(startDate) < new Date(finishDate)

export const createProject = async (request, response) => {
  try {
    const {
      userEmail,
      projectData: { name, startDate, finishDate }
    } = request.body

    if (!validateDates(startDate, finishDate))
      return response.json({
        message: 'invalid dates: the startDate is bigger than the finishDate'
      })

    if (!(await checkUserExists(userEmail)))
      return response.json({
        message: "the user you are trying to add a project doesn't exist!"
      })

    const newProject = await createProjectMongo(userEmail, {
      name,
      startDate,
      finishDate
    })
    return response.json(newProject)
  } catch (err) {}
}

export const findAllProjectsByUserId = async (request, response) => {
  const { userEmail } = request.query

  if (!(await checkUserExists(userEmail)))
    return response.json({
      message: "the user you are trying to add a project doesn't exist!"
    })

  const projects = await findAllProjectsByUserIdMongo(userEmail)
  return response.json(projects)
}

export const updateProjectById = async (request, response) => {
  const {
    userEmail,
    id,
    projectData: { name, startDate, finishDate }
  } = request.body

  if (!validateDates(startDate, finishDate))
    return response.json({
      message: 'invalid dates: the startDate is bigger than the finishDate'
    })

  const updatedProject = await updateProjectByIdMongo(userEmail, id, {
    name,
    startDate,
    finishDate
  })

  if (!updatedProject)
    return response.json({
      message: "the project doesn't exist!"
    })

  return response.json(updatedProject)
}

export const deleteProjectById = async (request, response) => {
  const { userEmail, id } = request.query

  const delationResponse = await deleteProjectByIdMongo(userEmail, id)

  return response.json(delationResponse)
}
