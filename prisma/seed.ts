import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Criando um usuário administrador
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: process.env.ADMIN_PASSWORD, 
      role: 'admin',
      name: 'Administrador',
    },
  });

  // Criando um usuário secretário
  await prisma.user.create({
    data: {
      email: 'secretary@example.com',
      password: process.env.SECRETARY_PASSWORD,
      role: 'secretary',
      name: 'Secretário',
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
