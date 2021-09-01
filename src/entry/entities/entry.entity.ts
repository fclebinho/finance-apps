import { FilterableField } from '@nestjs-query/query-graphql';
import {
  ObjectType,
  Field,
  ID,
  GraphQLISODateTime,
  Directive,
  registerEnumType,
} from '@nestjs/graphql';
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';

export enum EntryType {
  DEBT = 'debt',
  CREDIT = 'credit',
}

registerEnumType(EntryType, {
  name: 'EntryType',
  description: 'The supported entry types.',
});

export const entryTypeResolver: Record<keyof typeof EntryType, any> = {
  CREDIT: 'credit',
  DEBT: 'debt',
};

@Entity()
@ObjectType()
@Directive('@key(fields: "id")')
export class Entry {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string;

  @Column()
  @FilterableField(() => GraphQLISODateTime)
  due_date!: Date;

  @Column()
  @Field()
  description: string;

  @Column()
  @FilterableField((type) => EntryType)
  kind: EntryType;

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  createdAt!: Date;

  @UpdateDateColumn()
  @Field(() => GraphQLISODateTime)
  updatedAt!: Date;
}
