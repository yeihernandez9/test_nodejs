import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { ProfileEntity } from '../profile/profile.entity';
import { ShoppingEntity } from '../shopping/shopping.entity';
import { LogisticEntity } from '../logistics/logistics.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderEntity,
      ProfileEntity,
      ShoppingEntity,
      LogisticEntity,
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
