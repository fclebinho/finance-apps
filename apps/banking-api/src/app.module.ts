import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntryModule } from './entry/entry.module';
import { CustomerModule } from './customer/customer.module';
import { AccountModule } from './account/account.module';
import { KeycloakModule } from './keycloak/keycloak.module';
import { TypeOrmModule } from './type-orm/type-orm.module';
import { GraphqlFederationModule } from './graphql-federation/graphql-federation.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphqlFederationModule,
    TypeOrmModule,
    KeycloakModule,
    EntryModule,
    CustomerModule,
    AccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
