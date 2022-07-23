import UserController from '../controllers/user-controller.js'
import UserService from '../services/user-service.js'

export const makeUserController = (function () {
  return new UserController(UserService)
})()
