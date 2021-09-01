import { InputType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { EntryType } from '../entities/entry.entity';

@InputType()
export class CreateEntryInput {
  @Field(() => GraphQLISODateTime)
  due_date!: Date;

  @Field()
  description: string;

  @Field((type) => EntryType)
  kind: EntryType;
}
