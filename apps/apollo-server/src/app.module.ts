import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import serviceList from './service.list';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        // ... Apollo server options
        cors: true,
        playground: true,
      },
      gateway: {
        serviceList,
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
