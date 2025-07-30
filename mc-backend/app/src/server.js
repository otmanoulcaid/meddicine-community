import Fastify from 'fastify'
import printRoutes from 'fastify-print-routes';
import plugins from './plugins/index.plugin.js';
import { routes } from './routes/index.route.js';
import { config } from './config/env.config.js';
import dotenv from 'dotenv'

export class Server
{
    constructor()
    {
        this.server = Fastify();
        this.config();
    }

    config()
    {
        dotenv.config();
        this.server.register(plugins);
        this.server.register(printRoutes);
        this.server.register(routes, { prefix: '/api/v1' });
    }

    start()
    {
        console.log('============================== server config ==============================');
        console.log(config.PORT);
        console.log(config.HOST);
        console.log('============================== server config ==============================');
        
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
