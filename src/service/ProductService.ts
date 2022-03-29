import connection from '../models/connection';
import Products from '../interfaces/Products';

import ProductModel from '../models/ProductsModel';

export default class ProductService {
  public model: ProductModel;
  
  constructor() {
    this.model = new ProductModel(connection);
  }
  
  public async getAll(): Promise<Products[]> {
    const result = await this.model.getAll();
    return result;
  }

  public async create(name: string, amount: string): Promise<Products> {
    const result = await this.model.create(name, amount);
    return result;
  }
}