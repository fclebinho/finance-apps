import { CreateEntryInput } from './create-entry.input';
import {
  InputType,
  Field,
  PartialType,
  GraphQLISODateTime,
} from '@nestjs/graphql';
import { EntryType } from '../entities/entry.entity';

@InputType()
export class UpdateEntryInput extends PartialType(CreateEntryInput) {
  @Field(() => GraphQLISODateTime, { nullable: true })
  due_date!: Date;

  @Field({ nullable: true })
  description: string;

  @Field((type) => EntryType, { nullable: true })
  kind: EntryType;
}
