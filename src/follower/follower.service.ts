import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { Follower } from './entity/follower.entity';

@Injectable()
export class FollowerService {
  constructor(
    @InjectRepository(Follower) private followRepository: Repository<Follower>,
  ) {}
  async create(followData: CreateFollowerDto) {
    return await this.followRepository.save(followData);
  }

  async getById(id: number) {
    return await this.followRepository
      .createQueryBuilder('f')
      .innerJoin(User, 'u', 'f.followId = u.id')
      .where('f.id = :id', { id: id })
      .select([
        'u.id AS id',
        'u.name AS name',
        'u.email AS email',
        'u.gender AS gender',
        'u.address AS address',
        'u.isVIP AS isVIP',
      ])
      .getRawMany();
  }
}
