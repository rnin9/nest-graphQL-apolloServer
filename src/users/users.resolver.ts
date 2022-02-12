import { HttpException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => Boolean)
  users(@Args('bool') bool: boolean): boolean {
    return bool;
  }

  //User create Logic
  @Mutation(() => User)
  async createUser(@Args() createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.usersService.saveUser(createUserDto);
    } catch (err) {
      throw new HttpException(err.response, err.status);
    }
  }
}
