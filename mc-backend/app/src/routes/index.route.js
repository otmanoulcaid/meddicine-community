import { auth } from './auth.route.js'
import { user } from './user.route.js'

export const routes = (fastify) => {
    fastify.register(user, { prefix: '/users' });
    fastify.register(auth, { prefix: '/auth' });
};
