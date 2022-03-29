import { Router } from 'express';
import { Validation } from '../middlewares';
import LoginController from '../controllers/LoginController';

const router = Router();

const validation = new Validation();
const loginControler = new LoginController();

router.post('/', validation.loginValidate, loginControler.login);

export default router;