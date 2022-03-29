import { PrismaClient } from '@prisma/client';
import Products from '../interfaces/Products';

export default class ProductModel {
  constructor(private prisma: PrismaClient) {
    this.prisma = new PrismaClient();
  }

  public async getAll(): Promise<Products[]> {
    const result = await this.prisma.products.findMany();
    return result;
  }

  public async create(name:string, amount: string): Promise<Products> {
    const result = await this.prisma.products.create({
      data: {
        name,
        amount,
      },
      select: {
        id: true,
        name: true,
        amount: true,
        orderId: false,
      },
    });

    return result;
  }
}
