import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { entryTypeResolver } from '../entry/entities/entry.entity';
import { accountTypeResolver } from '../account/entities/account.entity';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      resolvers: {
        EntryType: entryTypeResolver,
        AccountType: accountTypeResolver,
      },
    }),
  ],
})
export class GraphqlFederationModule {}
