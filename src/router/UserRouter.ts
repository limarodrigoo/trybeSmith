import { Router } from 'express';
import { Validation, JwtMiddleware } from '../middlewares';
import UserController from '../controllers/UserController';

const router = Router();

const validation = new Validation();
const jwt = new JwtMiddleware();
const userControler = new UserController();

router.post('/', validation.userValidate, jwt.generateToken, userControler.create);

export default router;