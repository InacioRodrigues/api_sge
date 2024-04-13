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
exports.MatriculationController = void 0;
const common_1 = require("@nestjs/common");
const matriculation_service_1 = require("./matriculation.service");
const create_matriculation_dto_1 = require("./dto/create-matriculation.dto");
const update_matriculation_dto_1 = require("./dto/update-matriculation.dto");
let MatriculationController = class MatriculationController {
    constructor(matriculationService) {
        this.matriculationService = matriculationService;
    }
    create(createMatriculationDto) {
        return this.matriculationService.create(createMatriculationDto);
    }
    findAll() {
        return this.matriculationService.findAll();
    }
    findOne(id) {
        return this.matriculationService.findOne(+id);
    }
    update(id, updateMatriculationDto) {
        return this.matriculationService.update(+id, updateMatriculationDto);
    }
    remove(id) {
        return this.matriculationService.remove(+id);
    }
};
exports.MatriculationController = MatriculationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_matriculation_dto_1.CreateMatriculationDto]),
    __metadata("design:returntype", void 0)
], MatriculationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MatriculationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatriculationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_matriculation_dto_1.UpdateMatriculationDto]),
    __metadata("design:returntype", void 0)
], MatriculationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatriculationController.prototype, "remove", null);
exports.MatriculationController = MatriculationController = __decorate([
    (0, common_1.Controller)('matriculation'),
    __metadata("design:paramtypes", [matriculation_service_1.MatriculationService])
], MatriculationController);
//# sourceMappingURL=matriculation.controller.js.map