
import dotenv from 'dotenv';

dotenv.config();

export const config = {
    JWT_SECRET : process.env.JWT_SECRET || 'dev_env_secret',

    AUTH_EMAIL: process.env.EMAIL,
    AUTH_EMAIL_PASS: process.env.EMAIL_PASS,
    AUTH_EMAIL_HOST: process.env.EMAIL_HOST,

    HOST: process.env.HOST || '0.0.0.0',
    PORT: process.env.PORT || 3000,

    REDIS_HOST: process.env.REDIS_HOST || 'localhost',
    REDIS_PORT: process.env.REDIS_PORT || 6379,
    
    MYSQL_HOST: process.env.MYSQL_HOST || 'localhost',
    MYSQL_PORT: process.env.MYSQL_PORT || 3306,
    MYSQL_USER: process.env.MYSQL_USER || 'root',
    MYSQL_PASS: process.env.MYSQL_PASS || '',
    MYSQL_DB: process.env.MYSQL_DB || 'mc',
}
