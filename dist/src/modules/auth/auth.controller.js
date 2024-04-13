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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async getProfileToken(email, password) {
        try {
            const token = await this.authService.getProfileToken(email, password);
            return { token, message: 'Token JWT gerado com sucesso!' };
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Credenciais inválidas');
        }
    }
    async getProfile(req) {
        const user = req.user;
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    async login(req, email, password) {
        try {
            const result = await this.authService.login(email, password);
            if (!result) {
                throw new common_1.UnauthorizedException('Credenciais inválidas');
            }
            return result;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Credenciais inválidas');
        }
    }
    async updateUser(id, email, password) {
        try {
            const updatedUser = await this.authService.updateUser(id, email, password);
            return { user: updatedUser, message: 'User atualizado!' };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async deleteUser(id) {
        try {
            const deletedUser = await this.authService.deleteUser(id);
            if (!deletedUser) {
                throw new common_1.NotFoundException('User nao encontrado.');
            }
            return { user: deletedUser, message: 'User deletado com sucesso!' };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async findAllUsers() {
        try {
            const users = await this.authService.findAllUsers();
            return { users };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async register(email, password) {
        try {
            const user = await this.authService.register(email, password);
            return { user, message: 'User registado com sucesso!' };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async logout(req) {
        try {
            return { message: 'Logout successful' };
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Logout failed');
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('profile'),
    __param(0, (0, common_1.Body)('email')),
    __param(1, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfileToken", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)('email')),
    __param(2, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('email')),
    __param(2, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "findAllUsers", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)('email')),
    __param(1, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map