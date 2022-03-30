import connection from '../models/connection';
import Users from '../interfaces/Users';

import UserModel from '../models/UserModel';

export default class ProductService {
  public model: UserModel;
  
  constructor() {
    this.model = new UserModel(connection);
  }
  
  public async create(
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<Users> {
    const result = await this.model.create(username, classe, level, password);
    return result;
  }

  public async findIdByUser(username: string) :Promise<number> {
    const id = await this.model.findByUser(username);
    return id;
  }
}