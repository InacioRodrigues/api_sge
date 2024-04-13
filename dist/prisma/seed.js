"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.user.create({
        data: {
            email: 'admin@example.com',
            password: 'adminPassword',
            role: 'admin',
            name: 'Administrador',
        },
    });
    await prisma.user.create({
        data: {
            email: 'secretary@example.com',
            password: 'secretaryPassword',
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
//# sourceMappingURL=seed.js.map