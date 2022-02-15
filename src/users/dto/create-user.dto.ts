import { InputType, OmitType } from '@nestjs/graphql';
import { User } from '../entity/users.entity';

// data transfer object(DTO), send value by Object type
@InputType()
export class CreateUserDto extends OmitType(User, ['follower'], InputType) {}
