import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Criando um usuário administrador
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: process.env.ADMIN_PASSWORD, 
      isAdmin: true
    },
  });

  // Criando um usuário secretário
  await prisma.user.create({
    data: {
      email: 'secretary@example.com',
      password: process.env.SECRETARY_PASSWORD,
      isAdmin: false,
    },
  });

  console.log('Seeding completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
