import express from 'express';
import { getAllProperties, createProperty } from '../controllers/properties.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/', getAllProperties);
router.post('/', authMiddleware, createProperty);

export default router;