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
    try {
      await this.usersRepository.save(createUserDto);
      const user = this.usersRepository.findOne({ id: createUserDto.id });
      return user;
    } catch (err) {
      throw new HttpException('user Saving Error', 401);
    }
  }
}
