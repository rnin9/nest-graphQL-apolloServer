import { InputType, OmitType } from '@nestjs/graphql';
import { Follower } from '../entity/follower.entity';

@InputType()
export class CreateFollowerDto extends OmitType(
  Follower,
  ['followAt'],
  InputType,
) {}
