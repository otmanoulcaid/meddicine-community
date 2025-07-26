import fp from 'fastify-plugin'
import mailer from 'fastify-mailer'
import { config } from '../config/env.config.js';

export default fp((fastify) => {
    fastify.register(mailer, {
        defaults: {
            from: `"Meddicine Community" ${config.EMAIL}`
        },
        transport: {
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: config.EMAIL_USER,
                pass: config.EMAIL_PASS
            }
        }
    });

    fastify.decorate('sendMail', async function (to, subject, message) {
        return this.mailer.sendMail({
            to,
            subject,
            text: message
        });
    });
});