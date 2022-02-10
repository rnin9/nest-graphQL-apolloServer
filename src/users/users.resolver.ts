import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';

@Resolver(() => User)
export class UsersResolver {
  @Query(() => Boolean)
  users(@Args('bool') bool: boolean): boolean {
    return bool;
  }

  @Mutation(() => Boolean)
  createUser(@Args() createUserDto: CreateUserDto): boolean {
    console.log(createUserDto);
    return true;
  }
}
