import { Module } from '@nestjs/common';
import { DatabaseService } from '../dbconfig/dbconfig.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: DatabaseService })],
})
export class DbconfigModule {}
