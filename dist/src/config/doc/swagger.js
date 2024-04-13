"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const swagger = (app) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Global Holidays Service Example')
        .setDescription('The Global Holidays Service API description')
        .setVersion('0.0.1')
        .addTag('continents')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
};
exports.swagger = swagger;
//# sourceMappingURL=swagger.js.map