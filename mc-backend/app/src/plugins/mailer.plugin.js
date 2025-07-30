import fp from 'fastify-plugin'
import mailer from 'fastify-mailer'
import { config } from '../config/env.config.js';

export default fp((fastify) => {
    console.log('============================== MAILER CONFIG ==============================');
    console.log('Email:', config.AUTH_EMAIL);
    console.log('Host:', config.AUTH_EMAIL_HOST);
    console.log('Pass length:', config.AUTH_EMAIL_PASS ? config.AUTH_EMAIL_PASS.length : 'undefined');
    console.log('============================== MAILER CONFIG ==============================');

    fastify.register(mailer, {
        defaults: {
            from: `"Medicine Community" <${config.AUTH_EMAIL}>`
        },
        transport: {
            host: config.AUTH_EMAIL_HOST,
            port: 587,
            secure: false,
            auth: {
                user: config.AUTH_EMAIL,
                pass: config.AUTH_EMAIL_PASS
            }
        }
    });
});