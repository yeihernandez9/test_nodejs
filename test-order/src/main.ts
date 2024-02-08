import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';

const environment = process.env.NODE_ENV || 'development';
const envFileName = environment === 'production' ? '.env.production' : '.env';

// Cargar variables de entorno desde el archivo correspondiente
dotenv.config({ path: envFileName });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(AppModule.port);
}
bootstrap();
