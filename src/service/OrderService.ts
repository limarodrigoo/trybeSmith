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

  public async create(userId: number, products: number[]) {
    const newOrder = await this.orderModel.create(userId);
    const productsPromises = products.map(async (productId: number) => {
      const product = await this.productModel.getById(productId);
      if (newOrder.id) {
        await this.productModel
          .createByOrder(product.name, product.amount, newOrder.id);
        return productId;
      }
    }); 
    const result = await Promise.all(productsPromises);
    return { order: { userId, products: result } };
  }
}