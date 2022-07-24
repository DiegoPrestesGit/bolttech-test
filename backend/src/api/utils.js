import { findUserByEmailMongo } from '../handlers/mongo.js'
import { findOneProjectsById } from '../handlers/mongo.js'

export const checkUserExists = email => findUserByEmailMongo(email)

export const validateDates = (startDate, finishDate) =>
  new Date(startDate) < new Date(finishDate)

export const checkProjectExists = async _id => await findOneProjectsById(_id)

export const checkUserIsProjectOwner = (userEmail, project) =>
  project.userEmail === userEmail
