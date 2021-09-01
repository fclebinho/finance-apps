import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Account } from './entities/account.entity';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Account])],
      resolvers: [
        {
          EntityClass: Account,
          DTOClass: Account,
          CreateDTOClass: CreateAccountInput,
          UpdateDTOClass: UpdateAccountInput,
        },
      ],
    }),
  ],
  providers: [],
})
export class AccountModule {}
