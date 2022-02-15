import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { User } from './entity/users.entity';
import { FollowerService } from 'src/follower/follower.service';
import { Follower } from 'src/follower/entity/follower.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Follower])],
  providers: [UsersResolver, UsersService, FollowerService],
})
export class UsersModule {}
