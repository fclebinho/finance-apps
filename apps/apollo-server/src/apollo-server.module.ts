import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import { ApolloServerController } from './apollo-server.controller';
import { ApolloServerService } from './apollo-server.service';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        // ... Apollo server options
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: 'users', url: 'http://user-service/graphql' },
          { name: 'posts', url: 'http://post-service/graphql' },
        ],
      },
    }),
  ],
  controllers: [ApolloServerController],
  providers: [ApolloServerService],
})
export class ApolloServerModule {}
