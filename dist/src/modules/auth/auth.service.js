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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async register(email, password, isAdmin = true) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await this.prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                },
            });
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async login(email, password) {
        try {
            const user = await this.prisma.user.findUnique({
                where: { email },
            });
            if (!user) {
                return null;
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                throw new common_1.BadRequestException('Senha incorreta.');
            }
            const token = this.generateJwtToken(user);
            return { user, token, message: 'Login successful!' };
        }
        catch (error) {
            throw error;
        }
    }
    generateJwtToken(user) {
        const payload = { sub: user.id, };
        return this.jwtService.sign(payload);
    }
    async findAllUsers() {
        try {
            return this.prisma.user.findMany();
        }
        catch (error) {
            throw error;
        }
    }
    async validateUserById(id) {
        try {
            return this.prisma.user.findUnique({
                where: { id },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async updateUser(id, email, password) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            return this.prisma.user.update({
                where: { id },
                data: {
                    email,
                    password: hashedPassword,
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async deleteUser(id) {
        try {
            return this.prisma.user.delete({ where: { id } });
        }
        catch (error) {
            throw error;
        }
    }
    async getProfileToken(email, password) {
        try {
            const user = await this.prisma.user.findUnique({
                where: { email },
            });
            if (!user) {
                throw new common_1.UnauthorizedException('Usuário não encontrado');
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                throw new common_1.UnauthorizedException('Senha incorreta');
            }
            const token = this.generateJwtToken(user);
            return token;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map