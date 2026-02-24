import express from 'express';
import dotenv from 'dotenv';
import db from './db';
import authRoutes from './routes/auth.routes';
import cors from 'cors';

dotenv.config(); // <- load environment variables from .env file

const app = express();
app.use(cors()); // <- enable CORS for all routes
app.use(express.json()); // <- middleware to parse JSON request bodies

app.use('/api/auth', authRoutes); // <- use auth routes for /api/auth endpoint

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});