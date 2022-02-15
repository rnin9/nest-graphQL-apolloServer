import { Args, Mutation, ResolveField, Resolver } from '@nestjs/graphql';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { Follower } from './entity/follower.entity';
import { FollowerService } from './follower.service';

@Resolver(() => Follower)
export class FollowerResolver {
  constructor(private followService: FollowerService) {}

  @Mutation(() => Follower)
  async createFollow(
    @Args('input') followData: CreateFollowerDto,
  ): Promise<Follower> {
    return this.followService.create({ ...followData });
  }
}
