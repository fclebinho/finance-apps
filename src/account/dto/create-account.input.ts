import { InputType, Field } from '@nestjs/graphql';
import { AccountType } from '../entities/account.entity';

@InputType()
export class CreateAccountInput {
  @Field((type) => AccountType, { description: 'Example field (placeholder)' })
  kind!: AccountType;
}
