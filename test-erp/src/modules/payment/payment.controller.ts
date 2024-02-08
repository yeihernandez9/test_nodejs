import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private readonly _paymentService: PaymentService) {}

    @Post('create')
  async createUser(@Body() payload: any): Promise<any> {
    const createOrder = await this._paymentService.create(payload);
    return createOrder;
  }
}
