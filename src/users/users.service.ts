import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  //user Create On DB
  async saveUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersRepository.findOne({ id: createUserDto.id });
    //duplicate check logic
    if (user) {
      throw new HttpException('user Duplicate Error', 401);
    } else {
      return await this.usersRepository.save(createUserDto);
    }
  }

  //get User Data from ID
  async getUser(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ id: id });
    if (user) {
      return user;
    } else {
      throw new HttpException('user not found', 404);
    }
  }

  //update User by ID, update DTO
  async updateUser(id: number, userData: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findOne({ id: id });
    if (user) {
      await this.usersRepository.update(id, userData);
      return { id, ...userData };
    } else {
      throw new HttpException('user not found', 404);
    }
  }

  //delete User data by ID
  async deleteUser(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ id: id });
    if (!user) {
      throw new HttpException('user not found', 404);
    } else {
      await this.usersRepository.delete({ id: id });
      return user;
    }
  }
}
