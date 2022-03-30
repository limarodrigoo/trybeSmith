import { Pool, ResultSetHeader } from 'mysql2/promise';
import Orders from '../interfaces/Orders';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Orders[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Orders',
    );
    const [orders] = result;
    return orders as Orders[];
  }

  public async create(userId: number): Promise<Orders> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    const { insertId } = result;
    return { id: insertId, userId };
  }
}
