import { Request, Response } from 'express';
import UserService from '../service/UserService';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    try {
      const { username, classe, level, password, token } = req.body;
      await this.userService.create(username, classe, level, password);
      return res.status(201).json({ token });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Algo deu errado' });
    }
  };
}