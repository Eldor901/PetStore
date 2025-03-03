import { Field, ObjectType, ID, InputType } from "type-graphql";
import { Cat } from "./Cat";
import { Dog } from "./Dog";

@ObjectType()
export class PetStore {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  profileUrl!: string;

  @Field(() => [Cat])
  cats!: Cat[];

  @Field(() => [Dog])
  dogs!: Dog[];
}

@InputType()
export class PetStoreInput implements Partial<PetStore> {
  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  profileUrl!: string;
}
