"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatriculationService = void 0;
const common_1 = require("@nestjs/common");
let MatriculationService = class MatriculationService {
    create(createMatriculationDto) {
        return 'This action adds a new matriculation';
    }
    findAll() {
        return `This action returns all matriculation`;
    }
    findOne(id) {
        return `This action returns a #${id} matriculation`;
    }
    update(id, updateMatriculationDto) {
        return `This action updates a #${id} matriculation`;
    }
    remove(id) {
        return `This action removes a #${id} matriculation`;
    }
};
exports.MatriculationService = MatriculationService;
exports.MatriculationService = MatriculationService = __decorate([
    (0, common_1.Injectable)()
], MatriculationService);
//# sourceMappingURL=matriculation.service.js.map