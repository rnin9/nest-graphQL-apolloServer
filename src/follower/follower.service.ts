import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
    return await this.followRepository.find({ where: { id: id } });
  }
}
