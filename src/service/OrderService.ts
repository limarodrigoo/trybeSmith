import connection from '../models/connection';
import Orders from '../interfaces/Orders';
import OrderModel from '../models/OrderModel';
import ProductModel from '../models/ProductsModel';

export default class ProductService {
  public orderModel: OrderModel;

  public productModel: ProductModel;
  
  constructor() {
    this.orderModel = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }
  
  public async getAll(): Promise<Orders[]> {
    const orders = await this.orderModel.getAll();
    const productsOrderArray = orders.map(async (order) => {
      const products = await this.productModel.getByOrderId(<number>order.id);
      const productsId = products.map((product) => product.id);
      return { ...order, products: productsId };
    });
    const result = Promise.all(productsOrderArray);
    return result;
  }
}