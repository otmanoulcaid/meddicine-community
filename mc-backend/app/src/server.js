import Fastify from 'fastify'
import printRoutes from 'fastify-print-routes';
import cors from '@fastify/cors'
import dotenv from 'dotenv'
import plugins from './plugins/index.plugin.js';
import { routes } from './routes/index.route.js';
import { config } from './config/env.config.js';

export class Server
{
    constructor()
    {
        this.server = Fastify();
        this.config();
    }

    config() {
        dotenv.config();
    
        this.server.register(cors, {
            origin: ['http://localhost:3000'],
            credentials: true   
        });

        this.server.setErrorHandler((error, _, reply) => {
            reply.status(error.statusCode || 500).send({
                error: error.message || 'Something went wrong'
            });
        });

        this.server.register(plugins);
        this.server.register(printRoutes);
        this.server.register(routes, { prefix: '/api/v1' });
    }

    start()
    {
        this.server.listen({
                port: config.PORT,
                host: config.HOST,
            },
            (err) => {
                if (err) {
                    console.log(err);
                    process.exit(1);
                }
                console.log(`fastify server is running on port ${3000}...`);
            }
        );
    }
}
