import { Request, Response, NextFunction } from 'express';
import productSchema from '../schemas/productSchema';

export default class Validation {
  public productNameValidate = (req: Request, res: Response, next: NextFunction) => {
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
      return res.status(500).json({ message: 'Algo deu errado' });
    }
  };
} 
