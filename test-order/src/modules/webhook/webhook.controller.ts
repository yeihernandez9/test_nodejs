import { Body, Controller, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post()
  async handleWebhook(@Body() payload: any): Promise<any> {
    console.log(payload);

    // Procesar el evento y la carga útil...

    this.webhookService.processEvent(payload);
    return { statusCode: 200 };
  }
}
