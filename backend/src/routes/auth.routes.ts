import express from 'express';
import { register, login, profile } from '../controllers/auth.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/register', register); // <- create register route
router.post('/login', login); // <- create login route
router.get('/profile', authenticateToken, profile); // <- create profile route with authentication middleware

export default router;