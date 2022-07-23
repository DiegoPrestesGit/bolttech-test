export default class UserController {
  constructor(UserService) {
    this.userService = new UserService()
  }

  async create(request, response) {
    //   const { email, name, password } = request.body
    //   const newUser = await this.userService
  }

  getUserById(request, response) {
    return response.json({ oh: 'yet to implement' })
  }
}
