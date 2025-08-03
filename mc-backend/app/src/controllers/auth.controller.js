export class AuthController
{
    constructor(fastify, authService, userService)
    {
        this.fastify = fastify
        this.authService = authService
        this.userService = userService
    }

    async signup(request, reply)
    {
        const user = await this.authService.signup(request.body)
        reply.status(201).send ({
            message: 'sign up successfully, check your email box',
            user
        });
    }

    async verifyOtp(request, reply)
    {
        await this.authService.verifyOtp(request.body.email, request.body.otp, reply)
        reply.send({ message: 'verified successfully' });
    }

    async sendOtp(request, reply)
    {
        await this.authService.sendOtp(request.body.email, 'OTP')
        reply.send({ message: 'a verification code is sent,please check your email box' });
    }

    async login(request, reply)
    {
        await this.authService.login(request.body);
        reply.send({ message: 'login successfully, please check your email box'});
    }
}
