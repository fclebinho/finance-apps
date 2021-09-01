import { CreateEntryInput } from './create-entry.input';
import {
  InputType,
  Field,
  PartialType,
  GraphQLISODateTime,
} from '@nestjs/graphql';
import { EntryType } from '../entities/entry.entity';
import { FilterableField } from '@nestjs-query/query-graphql';

@InputType()
export class UpdateEntryInput extends PartialType(CreateEntryInput) {
  @Field(() => GraphQLISODateTime, { nullable: true })
  dueDate!: Date;

  @Field({ nullable: true })
  description: string;

  @Field(() => EntryType, { nullable: true })
  kind: EntryType;

  @FilterableField({ nullable: true })
  accountId: string;
}
