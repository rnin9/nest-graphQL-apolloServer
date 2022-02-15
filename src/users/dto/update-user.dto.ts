import { InputType, OmitType } from '@nestjs/graphql';
import { User } from '../entity/users.entity';

@InputType()
export class UpdateUserDto extends OmitType(User, ['id'], InputType) {}
