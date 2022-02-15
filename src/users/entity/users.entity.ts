import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Follower } from 'src/follower/entity/follower.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

enum Gender {
  male = 'male',
  female = 'female',
}
//To determine a GraphQL output type for the "gender"
registerEnumType(Gender, { name: 'Gender' });

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => Gender, { nullable: true })
  @Column({ type: 'enum', enum: Gender })
  gender?: Gender;

  @Field(() => String)
  @Column()
  address: string;

  @Field(() => Boolean)
  @Column()
  isVIP: boolean;

  @OneToMany(() => Follower, (follower) => follower.followUser)
  @Field(() => [User])
  follower?: User[];
}
