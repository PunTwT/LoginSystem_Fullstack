import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // <- load environment variables from .env file

const db = mysql.createConnection({ // <- Create reuse connection pool
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
});

export default db;