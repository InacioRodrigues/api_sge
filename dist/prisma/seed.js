"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.user.create({
        data: {
            email: 'admin@example.com',
            password: process.env.ADMIN_PASSWORD,
            isAdmin: true
        },
    });
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
//# sourceMappingURL=seed.js.map