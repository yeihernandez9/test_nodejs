import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  constructor() {
    dotenv.config();
  }
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      migrationsRun: false,
      logging: true,
      entities: [__dirname + '../modules/**/*.entity{.ts,.js}'],
      migrations: ['src/database/migrations/*{.ts,.js}'],
      synchronize: true, // Solo para desarrollo, deshabilitar en producción
    };
  }
}