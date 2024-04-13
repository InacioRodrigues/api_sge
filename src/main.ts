import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
 const app = await NestFactory.create<NestExpressApplication>(AppModule);

 app.setGlobalPrefix('api');
 app.enableCors();

 const config = new DocumentBuilder()
    .setTitle('SGE')
    .setDescription('API PARA O DESENVOLVIMENTO DE UM SISTEMA DE GESTÃO ESCOLAR')
    .setVersion('1.0')
    .addTag('tag')
    .build();
 const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('api-docs', app, document);

 await app.listen(3000);
}
bootstrap();
