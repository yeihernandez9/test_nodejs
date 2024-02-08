import { Module } from '@nestjs/common';
import { LogisticsController } from './logistics.controller';
import { LogisticsService } from './logistics.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogisticEntity } from './logistics.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LogisticEntity])],
  controllers: [LogisticsController],
  providers: [LogisticsService],
})
export class LogisticsModule {}
