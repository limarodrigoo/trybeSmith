import { Request, Response } from 'express';
import OrderService from '../service/OrderService';

export default class ProductController {
  constructor(private productService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.productService.getAll();
    return res.status(200).json(orders);
  };
}