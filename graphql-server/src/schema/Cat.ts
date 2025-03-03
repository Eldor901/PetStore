import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Cat {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  breed!: string;
}
