"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatriculationModule = void 0;
const common_1 = require("@nestjs/common");
const matriculation_service_1 = require("./matriculation.service");
const matriculation_controller_1 = require("./matriculation.controller");
let MatriculationModule = class MatriculationModule {
};
exports.MatriculationModule = MatriculationModule;
exports.MatriculationModule = MatriculationModule = __decorate([
    (0, common_1.Module)({
        controllers: [matriculation_controller_1.MatriculationController],
        providers: [matriculation_service_1.MatriculationService],
    })
], MatriculationModule);
//# sourceMappingURL=matriculation.module.js.map