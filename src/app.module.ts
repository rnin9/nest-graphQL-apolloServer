import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import * as config from 'config';

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
      entities: ['dist/**/entity/*.entity.{ts,js}'],
      synchronize: dbConfig.get('synchronize'),
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
