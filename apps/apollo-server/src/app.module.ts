import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import serviceList from './service.list';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        // ... Apollo server options
        cors: true,
        introspection: true,
        playground: {
          settings: {
            'editor.theme': 'light',
          },
        },
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
