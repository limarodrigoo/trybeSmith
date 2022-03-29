import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);

export default router;