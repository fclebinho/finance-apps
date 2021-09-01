import { Controller, Get } from '@nestjs/common';
import { ApolloServerService } from './apollo-server.service';

@Controller()
export class ApolloServerController {
  constructor(private readonly apolloServerService: ApolloServerService) {}

  @Get()
  getHello(): string {
    return this.apolloServerService.getHello();
  }
}
