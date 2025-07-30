import { config } from '../config/env.config.js'
import fp from 'fastify-plugin'
import mysql from 'mysql2/promise'
import fs from 'fs'

export default fp(async (fastify) => {
    const connection = await mysql.createConnection({
        host: config.MYSQL_HOST,
        port: config.MYSQL_PORT,
        user: config.MYSQL_USER,
        password: config.MYSQL_PASS,
        database: config.MYSQL_DB
    });
    
    console.log('============================== MYSQL CONNECTIVITY ==============================');
    console.log('Connected to MySQL successfully');
    console.log('============================== MYSQL CONNECTIVITY ==============================');

    const userSchema = await fs.promises.readFile(new URL('../data/user.sql', import.meta.url), 'utf-8');
    const postSchema = await fs.promises.readFile(new URL('../data/post.sql', import.meta.url), 'utf-8');
    const commentSchema = await fs.promises.readFile(new URL('../data/comment.sql', import.meta.url), 'utf-8');
    const doctorSchema = await fs.promises.readFile(new URL('../data/doctor.sql', import.meta.url), 'utf-8');
    const patientSchema = await fs.promises.readFile(new URL('../data/patient.sql', import.meta.url), 'utf-8');

    try {
        await connection.query(userSchema);
        await connection.query(postSchema);
        await connection.query(doctorSchema);
        await connection.query(commentSchema);
        await connection.query(patientSchema);
    } catch (error) {
        console.error('Error executing database schemas:', error);
    }

    fastify.decorate('db', connection);
});
