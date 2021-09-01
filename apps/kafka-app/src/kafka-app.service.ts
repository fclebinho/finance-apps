import { Injectable } from '@nestjs/common';

@Injectable()
export class KafkaAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
