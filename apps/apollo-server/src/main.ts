import { NestFactory } from '@nestjs/core';
import { ApolloServerModule } from './apollo-server.module';

async function bootstrap() {
  const app = await NestFactory.create(ApolloServerModule);
  await app.listen(3000);
}
bootstrap();
