import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Follower {
  @Field(() => Int)
  @PrimaryColumn()
  id: number;

  @Field(() => Int)
  @PrimaryColumn()
  isFollow: number;

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  followAt: Date;
}
