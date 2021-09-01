import { CreateAccountInput } from './create-account.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { AccountType } from '../entities/account.entity';

@InputType()
export class UpdateAccountInput extends PartialType(CreateAccountInput) {
  @Field((type) => AccountType, { description: 'Example field (placeholder)' })
  kind!: AccountType;
}
