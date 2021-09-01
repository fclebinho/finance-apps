import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import serviceList from './service.list';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: { cors: true },
      gateway: { serviceList },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
