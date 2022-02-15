import {
  Field,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

enum Gender {
  male = 'male',
  female = 'female',
}
//To determine a GraphQL output type for the "gender"
registerEnumType(Gender, { name: 'Gender' });
// @InputType({ isAbstract: true })
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
}
