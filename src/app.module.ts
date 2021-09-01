import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntryModule } from './entry/entry.module';
import { CustomerModule } from './customer/customer.module';
import { entryTypeResolver } from './entry/entities/entry.entity';
import { AccountModule } from './account/account.module';
import { accountTypeResolver } from './account/entities/account.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.PG_DATABASE,
      username: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD ?? null,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      resolvers: {
        EntryType: entryTypeResolver,
        AccountType: accountTypeResolver,
      },
    }),
    EntryModule,
    CustomerModule,
    AccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
