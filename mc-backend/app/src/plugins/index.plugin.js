import fp from 'fastify-plugin'

export default fp( async (fastify) => {
    fastify.register(await import('./auth.plugin.js'));
    fastify.register(await import('./mysql.plugin.js'));
    fastify.register(await import('./mailer.plugin.js'));
});
