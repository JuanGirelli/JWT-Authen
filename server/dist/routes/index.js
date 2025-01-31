import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';
const router = Router();
router.use('/auth', authRoutes); // POST,GET /auth/login
// TODO: Add authentication to the API routes
router.use('/api', authenticateToken, apiRoutes); // /api/...
export default router;
