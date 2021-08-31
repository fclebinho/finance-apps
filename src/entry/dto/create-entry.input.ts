import { InputType, Field, GraphQLISODateTime } from '@nestjs/graphql';

@InputType()
export class CreateEntryInput {
  @Field(() => GraphQLISODateTime)
  due_date!: Date;

  @Field()
  description: string;

  @Field()
  kind: string;
}
