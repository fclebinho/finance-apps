import { FilterableField } from '@nestjs-query/query-graphql';
import {
  ObjectType,
  Field,
  ID,
  GraphQLISODateTime,
  registerEnumType,
} from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum AccountType {
  CHECKING_ACCOUNT = 1,
  SAVINGS_ACCOUNT = 2,
  CREDIT_ACCOUNT = 3,
}

registerEnumType(AccountType, {
  name: 'AccountType',
  description: 'The supported entry types.',
});

export const accountTypeResolver: Record<keyof typeof AccountType, any> = {
  CHECKING_ACCOUNT: AccountType.CHECKING_ACCOUNT,
  SAVINGS_ACCOUNT: AccountType.SAVINGS_ACCOUNT,
  CREDIT_ACCOUNT: AccountType.CREDIT_ACCOUNT,
};

@Entity()
@ObjectType()
export class Account {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @FilterableField((type) => AccountType)
  kind: AccountType;

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  createdAt!: Date;

  @UpdateDateColumn()
  @Field(() => GraphQLISODateTime)
  updatedAt!: Date;
}
