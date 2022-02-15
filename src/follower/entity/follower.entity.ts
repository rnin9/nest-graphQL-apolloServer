import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entity/users.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Follower {
  @Field(() => Int)
  @PrimaryColumn()
  id: number;

  @Field(() => Int)
  @PrimaryColumn()
  followId: number;

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  followAt: Date;

  @ManyToOne(() => User, (user) => user.follower)
  followUser: User;
}
