import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import * as config from 'config';
import { GraphQLModule } from '@nestjs/graphql';
import { FollowerModule } from './follower/follower.module';

const dbConfig = config.get('db');
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: dbConfig.get('type'),
      host: dbConfig.get('host'),
      port: dbConfig.get('port'),
      username: dbConfig.get('username'),
      password: dbConfig.get('password'),
      database: dbConfig.get('database'),
      logging: true,
      entities: ['dist/**/entity/*.entity.{ts,js}'],
      synchronize: dbConfig.get('synchronize'),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    UsersModule,
    FollowerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
