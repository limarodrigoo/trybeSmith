import { Pool } from 'mysql2/promise';
import Users from '../interfaces/Users';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async login(username: string): Promise<Users[]> {
    const query = 'SELECT username, password FROM Trybesmith.Users WHERE username = ?';
    const [result] = await this.connection.execute(query, [username]);
    const user = result as Users[];
    return user;
  }
}
