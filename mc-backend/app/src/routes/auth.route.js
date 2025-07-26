import * as schemas from '../schemas/auth.schema.js';
import { AuthController } from '../controllers/auth.controller.js'
import { UserRepository } from '../repositories/user.repository.js'
import { UserService } from '../services/user.service.js';

export const auth = async (fastify) => {

    const userRepo = new UserRepository(fastify.db)
    const userService = new UserService(userRepo)
    const authController = new AuthController(fastify, userService);

    fastify.post('/signup', { schema: schemas.signupSchema }, authController.signup);
    fastify.post('/login', { schema: schemas.loginSchema }, authController.login);
    fastify.post('/logout', authController.logout);
    
    fastify.post('/reset-password', { schema: schemas.resetPasswordSchema }, authController.resetPassword);
    fastify.post('/otp', { schema: schemas.emailSchema }, authController.sendOtp);
    fastify.post('/verify-otp', { schema: schemas.verifyOtpSchema }, authController.verifyOtp);
}
