import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

function prepareOpenApi(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Clipboard Health API Docs')
    .setDescription('CH API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  return SwaggerModule.createDocument(app, options);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('/swagger', app, prepareOpenApi(app));

  await app.listen(3000);
}
bootstrap();
