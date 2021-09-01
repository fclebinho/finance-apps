import { Controller, Get } from '@nestjs/common';
import { KafkaAppService } from './kafka-app.service';

@Controller()
export class KafkaAppController {
  constructor(private readonly kafkaAppService: KafkaAppService) {}

  @Get()
  getHello(): string {
    return this.kafkaAppService.getHello();
  }
}
