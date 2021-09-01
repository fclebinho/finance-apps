import { FilterableField } from '@nestjs-query/query-graphql';
import { InputType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { EntryType } from '../entities/entry.entity';

@InputType()
export class CreateEntryInput {
  @Field(() => GraphQLISODateTime)
  dueDate!: Date;

  @Field()
  description: string;

  @Field(() => EntryType)
  kind: EntryType;

  @FilterableField({ nullable: true })
  accountId: string;
}
