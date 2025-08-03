import * as schemas from '../schemas/user.schema.js'
import { UserController } from '../controllers/user.controller.js'
import { UserRepository } from '../repositories/user.repository.js'
import { UserService } from '../services/user.service.js'

export const user = async (fastify) => {

    const userRepo = new UserRepository(fastify.db)
    const userService = new UserService(userRepo)
    const userController = new UserController(fastify, userService)

    fastify.get ('/:email' , userController.getUser.bind(userController));
    fastify.put ('/:email' , userController.updateUser.bind(userController));
    fastify.delete ('/:email' , userController.deleteUser.bind(userController));
}
