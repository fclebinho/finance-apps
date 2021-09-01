import { Injectable } from '@nestjs/common';

@Injectable()
export class ApolloServerService {
  getHello(): string {
    return 'Hello World!';
  }
}
