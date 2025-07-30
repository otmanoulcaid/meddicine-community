import * as schemas from '../schemas/auth.schema.js';
import { AuthController } from '../controllers/auth.controller.js'
import { UserRepository } from '../repositories/user.repository.js'
import { UserService } from '../services/user.service.js';
import { AuthService } from '../services/auth.service.js';

export const auth = async (fastify) => {

    const userRepo = new UserRepository(fastify.db)
    const userService = new UserService(userRepo)
    const authService = new AuthService(fastify);
    const authController = new AuthController(fastify, authService, userService);

    fastify.post('/signup', { schema: schemas.signupSchema }, authController.signup.bind(authController));
    fastify.post('/verify-otp', { schema: schemas.verifyOtpSchema }, authController.verifyOtp.bind(authController));
//     fastify.post('/login', { schema: schemas.loginSchema }, authController.login.bind(authController));
//     fastify.post('/logout', authController.logout.bind(authController));
    
//     fastify.post('/reset-password', { schema: schemas.resetPasswordSchema }, authController.resetPassword.bind(authController));
//     fastify.post('/otp', { schema: schemas.emailSchema }, authController.sendOtp.bind(authController));
}
