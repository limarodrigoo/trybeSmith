import { Request, Response } from 'express';
import LoginService from '../service/LoginService';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const { code, error, token } = await this.loginService.login(username, password);
      if (error) {
        return res.status(code).json({ error });
      }
      return res.status(code).json({ token });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Algo deu errado' });
    }
  };
}