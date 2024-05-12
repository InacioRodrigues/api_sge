"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let ClassService = class ClassService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async remove(id) {
        try {
            const deletedClass = await this.prisma.class.delete({
                where: { id },
            });
            return deletedClass;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Class com ID ${id} não encontrado`);
        }
    }
    async create(data) {
        try {
            const { name, course, academicYear } = data;
            const classInstance = await this.prisma.class.create({
                data: {
                    name,
                    course,
                    academicYear,
                },
            });
            return classInstance;
        }
        catch (error) {
            throw new Error('Falha ao criar class');
        }
    }
    async update(id, data) {
        try {
            const { name, course, academicYear } = data;
            const updatedClass = await this.prisma.class.update({
                where: { id },
                data: {
                    name,
                    course,
                    academicYear,
                },
            });
            return updatedClass;
        }
        catch (error) {
            throw new Error(`Falha ao atualizar class com ID ${id}: ${error.message}`);
        }
    }
    async delete(id) {
        try {
            const deletedClass = await this.prisma.class.delete({
                where: { id },
            });
            return deletedClass;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Class com ID ${id} não encontrada`);
        }
    }
    async findOne(id) {
        try {
            const classInstance = await this.prisma.class.findUnique({
                where: { id },
            });
            return classInstance;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Class com ID ${id} não encontrada`);
        }
    }
    async findAll() {
        try {
            const classes = await this.prisma.class.findMany();
            return classes;
        }
        catch (error) {
            throw new Error('Falha ao obter classes');
        }
    }
};
exports.ClassService = ClassService;
exports.ClassService = ClassService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClassService);
//# sourceMappingURL=class.service.js.map