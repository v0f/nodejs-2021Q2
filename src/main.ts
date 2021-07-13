import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { Logger } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import path from 'path';
import YAML from 'yamljs';
import config from './config/config';
import { fastifyAdapter } from './config/fastify.config';
import { requestLogger } from './config/logger';
import { AppModule } from './app/app.module';
import { UsersService } from './resources/users/users.service';

const logger = new Logger();

async function bootstrap() {
  let app: INestApplication;
  let frameworkName = 'EXPRESS';
  const { USE_FASTIFY } = config;
  if (USE_FASTIFY === 'yes') {
    frameworkName = 'FASTIFY';
    app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      fastifyAdapter,
    );
  } else {
    app = await NestFactory.create(AppModule);
    app.use(requestLogger);
  }

  const usersService = app.get(UsersService);
  await usersService.createAdmin();

  const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
  SwaggerModule.setup('docs', app, swaggerDocument);

  await app.listen(String(config['PORT']), '0.0.0.0');
  console.log(
    `Application is running on: ${await app.getUrl()} using ${frameworkName}`,
  );
}
bootstrap();

process.on('uncaughtException', (error) => {
  logger.error(`uncaughtException: ${error.message}`);
  setTimeout(() => process.exit(1), 100);
});

process.on('unhandledRejection', (reason: { message?: string }) => {
  logger.error(`unhandledRejection: ${reason.message}`);
  setTimeout(() => process.exit(1), 100);
});
