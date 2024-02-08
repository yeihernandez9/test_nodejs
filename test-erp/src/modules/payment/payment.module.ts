import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from '../profile/profile.entity';
import { PaymentEntity } from './payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity, PaymentEntity])],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule {}
