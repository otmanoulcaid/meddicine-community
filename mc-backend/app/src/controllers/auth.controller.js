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
        if (request.body.password != request.body.confirmPassword)
            return reply.status(400).send({message: 'the password should be the same'});
        const user = await this.userService.addUser({
            first_name: request.body.firstName,
            last_name: request.body.lastName, 
            email: request.body.email,
            password: request.body.password,
            gender: request.body.gender,
            dob: request.body.dob
        });
        let otp = await this.authService.sendOtp(request.body.email, 'verify your account');
        console.log('============================== OTP ==============================');
        console.log(otp);
        console.log('============================== OTP ==============================');

        reply.status(201).send ({
            message: 'sign up successfully, check your email',
            user
        });
    }

    async verifyOtp(request, _)
    {
        await this.authService.verifyOtp(request.body.email, request.body.otp)
        return ({ message: 'account verified' });
    }

    async login(request, reply)
    {
        
    }

    async logout(request, reply)
    {
        
    }

    async resetPassword(request, reply)
    {
        
    }
}
