import bcrypt from 'bcrypt'
import AppError from "../utils/AppError.js";

export class AuthService
{
    constructor(fastify, userService)
    {
        this.userService = userService
        this.fastify = fastify
    }

    #generateSixRandomNumber(min = 100_000, max = 1_000_000)
    {
        return Math.floor(Math.random() * (max - min) + min)
    }
    
    async sendOtp(email, subject)
    {
        const otp = this.#generateSixRandomNumber();
        try {
            const response = await this.fastify.mailer.sendMail({
                to: email,
                subject,
                html: `<p>ur code is <b>${otp}</b></p>`
            });
            await this.fastify?.redis?.setWithExpiry(email, otp + '', 10 * 60);
            console.log('============================== OTP ==============================');
            console.log(otp);
            console.log('============================== OTP ==============================');
        } catch (error)
        {
            console.log('============================== sentd OTP catch ==============================');
            console.log( error );
            console.log('============================== sentd OTP catch ==============================');
            throw new AppError('something goes wrong with your email', 400)
        }
    }
    
    async verifyOtp(email, otp, reply)
    {
        const user = await this.userService.getUserByEmail(email);
        if (!user)
            throw new AppError('invalid credentials', 400)
        const storedOtp = await this.fastify.redis.get(email);
        if (!storedOtp || storedOtp !== otp)
            throw new AppError('not a valid code, try again', 400);
        await this.fastify.redis.remove(email)
        const token = this.fastify.jwt.sign (
            { username: user.username, email },
            { expiresIn: 10 * 60}
        )
        reply.setCookie ('accessToken', token, {
            path: '/',
            httpOnly: true,
            sameSite: true,
            maxAge: 10 * 60
        });
    }

    async signup(body)
    {
        if (body.password != body.confirmPassword)
            throw new AppError('the password should be the same' , 400);
        const hashedPass = await bcrypt.hash(body.password, 10);
        const user = await this.userService.addUser({
            first_name: body.firstName,
            last_name: body.lastName, 
            email: body.email,
            password: hashedPass,
            gender: body.gender,
            dob: body.dob
        });
        await this.sendOtp(body.email, 'verify your account');
        return {
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name
        };
    }
    
    async login({ email, password })
    {
        const user = await this.userService.getUserByEmail(email);
        if (!user || !(await bcrypt.compare (password, user.password)))
            throw new AppError('Invalid credentials', 401);
        await this.sendOtp(user.email, 'Two Factor Authentication process');
    }
}
