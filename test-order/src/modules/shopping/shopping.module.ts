import { Module } from '@nestjs/common';
import { ShoppingController } from './shopping.controller';
import { ShoppingService } from './shopping.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingEntity } from './shopping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingEntity])],
  controllers: [ShoppingController],
  providers: [ShoppingService],
})
export class ShoppingModule {}
