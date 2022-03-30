import { Request, Response, NextFunction, Errback } from 'express';

export default class Error {
  public productNameValidate = (e: Errback, req: Request, res: Response, _next: NextFunction) => {
    console.log(e);
    return res.status(500).json({ message: 'Algo deu errado' });
  };
} 
