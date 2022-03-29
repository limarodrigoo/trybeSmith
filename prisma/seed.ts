import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // const newProduct = await prisma.products.upsert({
  //   where: {},
  //   update: {},
  //   create: {
  //     name: 'Espada curta',
  //     amount: '10 peças de ouro',
  //   },
  // });

  const product2 = await prisma.products.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      name: 'Escudo desnecessariamente grande',
      amount: '20 peças de ouro',
    },
  });

  console.log(product2);
}

main();
