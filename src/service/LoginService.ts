import connection from '../models/connection';
import LoginModel from '../models/LoginModel';
import JwtService from './JwtService';

interface ResponseObject {
  code: number,
  error?: string,
  token?: string,
}

export default class ProductService {
  public loginModel: LoginModel;
  
  public jwtService: JwtService;

  constructor() {
    this.loginModel = new LoginModel(connection);
    this.jwtService = new JwtService();
  }
  
  public async login(username: string, password: string): Promise<ResponseObject> {
    const user = await this.loginModel.login(username);
    const [userFound] = user;
    if (!user.length) {
      return { code: 401, error: 'Username or password invalid' };
    }
    if (userFound.password !== password) {
      return { code: 401, error: 'Username or password invalid' };
    }
    const token = this.jwtService.genToken(userFound);
    return { code: 200, token };
  }
}