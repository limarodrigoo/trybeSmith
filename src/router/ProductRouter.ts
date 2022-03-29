import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import { Validation } from '../middlewares';

const router = Router();

const validation = new Validation();

const productController = new ProductController();

router.get('/', productController.getAll);
router.post('/', validation.productValidate, productController.create);

export default router;