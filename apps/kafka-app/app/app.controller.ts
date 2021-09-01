import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from 'apps/finance-api/src/app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('my-first-topic') // Our topic name
  getHello(@Payload() message) {
    console.log(message.value);
    return 'Hello World';
  }
}
