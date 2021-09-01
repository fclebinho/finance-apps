import { Module } from '@nestjs/common';
import { TypeOrmModule as NestJSTypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    NestJSTypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.POSTGRES_URL,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
  ],
})
export class TypeOrmModule {}
