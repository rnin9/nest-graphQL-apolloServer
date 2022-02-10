import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

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

  @Field(() => String, { nullable: true })
  @Column()
  gender?: 'male' | 'female';

  @Field(() => String)
  @Column()
  address: string;

  @Field(() => Boolean)
  @Column()
  isVIP: boolean;
}
