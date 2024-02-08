import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookService {
  async processEvent(payload: any): Promise<any> {
    return 'evento procesado';
  }
}
