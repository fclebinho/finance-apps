import { FilterableField } from '@nestjs-query/query-graphql';
import {
  ObjectType,
  Field,
  ID,
  GraphQLISODateTime,
  Directive,
} from '@nestjs/graphql';
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';

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
  @Field()
  kind: string;

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  createdAt!: Date;

  @UpdateDateColumn()
  @Field(() => GraphQLISODateTime)
  updatedAt!: Date;
}
