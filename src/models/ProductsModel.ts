import { PrismaClient } from '@prisma/client';
import Products from '../interfaces/Products';

export default class ProductModel {
  constructor(private prisma: PrismaClient) {
    this.prisma = new PrismaClient();
  }

  public async getAll(): Promise<Products[]> {
    const result = this.prisma.products.findMany();
    return result;
  }
}
