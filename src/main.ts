import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as cookieParser from 'cookie-parser';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: process.env.APP_WEB!,
    credentials: true
  }

  app.enableCors(corsOptions)
  app.use(cookieParser())

  const config = new DocumentBuilder()
    .setTitle('Manager API')
    .setDescription('Manager API description')
    .setVersion('1.0')
    .addCookieAuth('access_token') // Suporte a cookie como auth
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs-swagger', app, document);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
