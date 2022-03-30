import { Request, Response } from 'express';
import OrderService from '../service/OrderService';
import UserService from '../service/UserService';

export default class ProductController {
  private productService;
  
  private userService;

  constructor() {
    this.productService = new OrderService();
    this.userService = new UserService(); 
  }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.productService.getAll();
    return res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    const { products, username } = req.body;
    const userId = await this.userService.findIdByUser(username);
    req.body.userId = userId;
    const newOrder = await this.productService.create(userId, products);
    return res.status(201).json(newOrder);
  };
}