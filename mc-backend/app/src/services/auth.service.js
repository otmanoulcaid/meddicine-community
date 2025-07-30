import AppError from "../utils/AppError.js";

export class AuthService
{
    constructor(fastify)
    {
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
            console.log('============================== response awaiting ==============================');
            console.log( response );
            console.log('============================== response awaiting ==============================');
            await this.fastify?.redis?.setWithExpiry(email, otp + '', 10 * 60);
            return otp;
        } catch (error)
        {
            console.log('============================== sentd OTP catch ==============================');
            console.log( error );
            console.log('============================== sentd OTP catch ==============================');
            throw new AppError('something goes wrong with email', 500)
        }
    }


    async verifyOtp(email, otp)
    {
        console.log(email, otp);
        const storedOtp = await this.fastify.redis.get(email);
        console.log(storedOtp);
        if (!storedOtp || storedOtp !== otp)
            throw new AppError('not a valid code, try again', 400);
        this.fastify.redis.remove(email)
    }
}