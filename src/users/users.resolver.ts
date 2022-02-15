import { HttpException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/users.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  async getUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    try {
      return await this.usersService.getUser(id);
    } catch (err) {
      throw new HttpException(err.response, err.status);
    }
  }

  //User create Logic
  @Mutation(() => User)
  async createUser(
    @Args('createInput') createUserDto: CreateUserDto,
  ): Promise<User> {
    try {
      return await this.usersService.saveUser({ ...createUserDto });
    } catch (err) {
      throw new HttpException(err.response, err.status);
    }
  }

  //User update Logic
  @Mutation(() => User)
  async updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateInput') userData: UpdateUserDto,
  ): Promise<User> {
    try {
      return await this.usersService.updateUser(id, { ...userData });
    } catch (err) {
      throw new HttpException(err.response, err.status);
    }
  }

  @Mutation(() => User)
  async deleteUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    try {
      return await this.usersService.deleteUser(id);
    } catch (err) {
      throw new HttpException(err.response, err.status);
    }
  }
}
