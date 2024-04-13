"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMatriculationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_matriculation_dto_1 = require("./create-matriculation.dto");
class UpdateMatriculationDto extends (0, mapped_types_1.PartialType)(create_matriculation_dto_1.CreateMatriculationDto) {
}
exports.UpdateMatriculationDto = UpdateMatriculationDto;
//# sourceMappingURL=update-matriculation.dto.js.map