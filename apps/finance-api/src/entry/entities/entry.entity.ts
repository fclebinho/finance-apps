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
  CREDIT: EntryType.CREDIT,
  DEBT: EntryType.DEBT,
};

@Entity()
@ObjectType()
@Directive('@key(fields: "id")')
export class Entry {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string;

  @Column({ name: 'due_date' })
  @FilterableField(() => GraphQLISODateTime)
  dueDate!: Date;

  @Column()
  @Field()
  description: string;

  @Column()
  @FilterableField(() => EntryType)
  kind: EntryType;

  @Column({ nullable: true, name: 'account_id' })
  @FilterableField({ nullable: true })
  accountId: string;

  @CreateDateColumn({ name: 'created_at' })
  @Field(() => GraphQLISODateTime)
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Field(() => GraphQLISODateTime)
  updatedAt!: Date;
}
