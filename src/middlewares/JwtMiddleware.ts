import { Request, Response, NextFunction } from 'express';
import JwtService from '../service/JwtService';

export default class JwtMiddleware {
  public service;

  constructor() {
    this.service = new JwtService();
  }

  public generateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, classe, level, password } = req.body;
      const token = this.service.genToken({ username, classe, level, password });
      req.body.token = token;
      next();
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Algo deu errado' });
    }
  };
}