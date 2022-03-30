import { Router } from 'express';
import OrderController from '../controllers/OrderController';
import { JwtMiddleware, Validation } from '../middlewares';

const router = Router();

const orderController = new OrderController();
const jwtMiddleware = new JwtMiddleware();
const validation = new Validation();

router.get('/', orderController.getAll);
router.post(
  '/',
  jwtMiddleware.validateToken,
  validation.arrayOfProductsValidate,
  orderController.create,
);

export default router;
