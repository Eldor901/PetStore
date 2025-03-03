import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Dog {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  breed!: string;
}
