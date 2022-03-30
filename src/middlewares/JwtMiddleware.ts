import { Request, Response, NextFunction } from 'express';
import UserService from '../service/UserService';
import JwtService from '../service/JwtService';

export default class JwtMiddleware {
  public service;

  public userService;

  constructor() {
    this.service = new JwtService();
    this.userService = new UserService();
  }

  public generateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
      const token = this.service.genToken({ username, password });
      req.body.token = token;
      next();
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Algo deu errado' });
    }
  };

  public validateToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401).json({ error: 'Token not found' });
      }
      const user = this.service.validateToken(authorization);
      if (!user) {
        return res.status(401).json({ error: 'Invalid token' });
      }
      req.body.username = user.username;
      
      next();
    } catch (e) {
      console.log(e);
      next(e);
    }
  };
}
