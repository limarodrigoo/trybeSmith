import { Request, Response, NextFunction } from 'express';
import { loginSchema, productSchema, userSchema } from '../schemas';

export default class Validation {
  public error;
  
  constructor() {
    this.error = 'Algo deu errado';
  }

  public productValidate = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { name, amount } = req.body;
      const { error } = productSchema.validate({ name, amount });
      if (error) {
        const [code, message] = error.details[0].message.split('|');

        return res.status(Number(code)).json({ error: message });
      }
      next();
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: this.error });
    }
  };

  public userValidate = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, classe, level, password } = req.body;
      const { error } = userSchema.validate(
        { username, classe, level, password },
        { convert: false },
      );
      if (error) {
        const [code, message] = error.details[0].message.split('|');
        return res.status(Number(code)).json({ error: message });
      }
      next();
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: this.error });
    }
  };
  
  public loginValidate = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
      const { error } = loginSchema.validate(
        { username, password },
      );
      if (error) {
        const [code, message] = error.details[0].message.split('|');
        return res.status(Number(code)).json({ error: message });
      }
      next();
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: this.error });
    }
  };
}
