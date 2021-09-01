import { FilterableField } from '@nestjs-query/query-graphql';
import { InputType, Field } from '@nestjs/graphql';
import { AccountType } from '../entities/account.entity';

@InputType()
export class CreateAccountInput {
  @Field(() => AccountType, { description: 'Example field (placeholder)' })
  kind!: AccountType;

  @FilterableField()
  userId: string;
}
