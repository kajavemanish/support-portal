import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { GLOBAL_PREFIX } from './constants/routes';

async function bootstrap() {
  const server = new ExpressAdapter(express());
  const app = await NestFactory.create(AppModule, server);
  app.enableCors();
  app.setGlobalPrefix(GLOBAL_PREFIX);
  setupSwagger(app);
  await app.listen(8000);
}
bootstrap();
