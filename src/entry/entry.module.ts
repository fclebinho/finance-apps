import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Entry } from './entities/entry.entity';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Entry])],
      resolvers: [
        {
          EntityClass: Entry,
          DTOClass: Entry,
          CreateDTOClass: CreateEntryInput,
          UpdateDTOClass: UpdateEntryInput,
        },
      ],
    }),
  ],
  providers: [],
})
export class EntryModule {}
