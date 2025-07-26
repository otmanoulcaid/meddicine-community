
import doenv from 'dotenv';

doenv.config();

export const config = {
    JWT_SECRET : process.env.JWT_SECRET || 'dev_env_secret',

    AUTH_EMAIL: process.env.EMAIL,
    AUTH_EMAIL_PASS: process.env.EMAIL_PASS,
    AUTH_EMAIL_HOST: process.env.EMAIL_HOST,

    PORT: process.env.PORT || 3000,
    HOST: process.env.HOST || '0.0.0.0',

    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_PORT: process.env.MYSQL_PORT,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASS: process.env.MYSQL_PASS,
    MYSQL_DB: process.env.MYSQL_DATABASE,
}
