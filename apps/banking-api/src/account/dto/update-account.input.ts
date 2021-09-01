import { CreateAccountInput } from './create-account.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { AccountType } from '../entities/account.entity';
import { FilterableField } from '@nestjs-query/query-graphql';

@InputType()
export class UpdateAccountInput extends PartialType(CreateAccountInput) {
  @Field(() => AccountType, { description: 'Example field (placeholder)' })
  kind!: AccountType;

  @FilterableField()
  userId: string;
}
