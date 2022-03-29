import { Request, Response } from 'express';
import ProductService from '../service/ProductService';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    return res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    try {
      const { name, amount } = req.body;
      const newProduct = await this.productService.create(name, amount);
      return res.status(201).json({ item: newProduct });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Algo deu errado' });
    }
  };
}