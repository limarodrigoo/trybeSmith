import { Pool } from 'mysql2/promise';
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
}
