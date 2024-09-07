import { Router } from 'express';
import userRoutes from './user/routes.js';
const router = Router();
router.get('/', (req, res) => {
    res.send('Hello from the root of the API!');
});
router.use('/users', userRoutes);
export default router;
