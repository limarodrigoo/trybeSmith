import { Pool, ResultSetHeader } from 'mysql2/promise';
import Users from '../interfaces/Users';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<Users> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
    const { insertId } = result;

    const newProduct = { id: insertId, username, classe, level, password };
    return newProduct;
  }

  public async findByUser(username: string): Promise<number> {
    const [result] = await this.connection.execute(
      'SELECT id FROM Trybesmith.Users WHERE username = ?',
      [username],
    );
    const [user] = result as Users[];
    return user.id as number;
  }
}
