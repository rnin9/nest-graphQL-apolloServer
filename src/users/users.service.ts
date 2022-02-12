import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  async saveUser(createUserDto: CreateUserDto) {
    const user = await this.usersRepository.findOne({ id: createUserDto.id });
    if (user) {
      throw new HttpException('user Duplicate Error', 401);
    } else {
      return await this.usersRepository.save(createUserDto);
    }
  }
}
