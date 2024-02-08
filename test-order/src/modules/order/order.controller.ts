import { OrderData } from './order.interface';
import { OrderService } from './order.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('order')
export class OrderController {
  constructor(private readonly _orderService: OrderService) {}

  @Post('create')
  async createUser(@Body() data: OrderData): Promise<any> {
    const createOrder = await this._orderService.create(data);

    
    return createOrder;
  }
}
