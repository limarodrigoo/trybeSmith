import { Pool, ResultSetHeader } from 'mysql2/promise';
import Products from '../interfaces/Products';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Products[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    const [products] = result;
    return products as Products[];
  }

  public async getByOrderId(id: number): Promise<Products[]> {
    const [result] = await this.connection.execute(
      'SELECT id FROM Trybesmith.Products WHERE orderId=?',
      [id],
    );
    const product = result as Products[];
    return product;
  }

  public async create(name: string, amount: string): Promise<Products> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [name, amount],
    );
    const { insertId } = result;

    const newProduct = { id: insertId, name, amount };
    return newProduct;
  }
}
