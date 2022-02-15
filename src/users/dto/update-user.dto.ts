import { ArgsType, OmitType } from '@nestjs/graphql';
import { User } from '../entity/users.entity';

@ArgsType()
export class UpdateUserDto extends OmitType(User, ['id']) {}
