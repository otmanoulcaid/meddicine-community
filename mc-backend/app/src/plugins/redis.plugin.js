import { config } from '../config/env.config.js'
import fp from 'fastify-plugin'
import { createClient } from 'redis'

export default fp(async (fastify) => {
    const client = createClient({
        url: `redis://${config.REDIS_HOST || 'localhost'}`
    });

    client.on('error', (err) => {
        console.log('============================== REDIS ERROR HOOK ==============================');
        console.log('Redis Client Error', err);
        console.log('============================== REDIS ERROR HOOK ==============================');
    });

    await client.connect();
    console.log('============================== REDIS CONNECTIVITY ==============================');
    console.log('Connected to Redis successfully');
    console.log('============================== REDIS CONNECTIVITY ==============================');
    
    fastify.decorate('redis', {
        client,
        
        async setWithExpiry(key, value, ttlSeconds) {
            try {
                await client.setEx(key, ttlSeconds, JSON.stringify(value));
                console.log(`Set key "${key}" with TTL ${ttlSeconds} seconds`);
                return true;
            } catch (error) {
                console.error('Error setting Redis key:', error);
                return false;
            }
        },

        async get(key) {
            try {
                const value = await client.get(key);
                return value ? JSON.parse(value) : null;
            } catch (error) {
                console.error('Error getting Redis key:', error);
                return null;
            }
        },

        async remove(key) {
            try {
                const result = await client.del(key);
                console.log(`Removed key "${key}". Keys deleted: ${result}`);
                return result > 0;
            } catch (error) {
                console.error('Error removing Redis key:', error);
                return false;
            }
        },

        async exists(key) {
            try {
                const result = await client.exists(key);
                return result === 1;
            } catch (error) {
                console.error('Error checking Redis key existence:', error);
                return false;
            }
        },

        async getTTL(key) {
            try {
                const ttl = await client.ttl(key);
                return ttl;
            } catch (error) {
                console.error('Error getting TTL:', error);
                return -1;
            }
        }
    });

    fastify.addHook('onClose', (instance, done) => {
        client.quit();
        done();
    });
});
