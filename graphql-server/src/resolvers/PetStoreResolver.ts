import { Query, Mutation, Arg, Resolver } from "type-graphql";
import { PetStore, PetStoreInput } from "../schema/PetStore";
import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

let petStores: PetStore[] = [];

@Resolver()
export class PetStoreResolver {
  @Query(() => [PetStore])
  getPetStores(): PetStore[] {
    return petStores;
  }

  @Mutation(() => PetStore)
  createPetStore(@Arg("input") input: PetStoreInput): PetStore {
    const createPets = (petType: "cat" | "dog") => {
      const MIN_VALUE = 10;
      const MAX_VALUE = 40;

      const getRandomNumber = () => Math.floor(Math.random() * 31) + 10;

      return Array.from({ length: getRandomNumber() }, () => ({
        id: uuidv4(),
        name: faker.person.fullName(),
        breed: faker.animal[petType](),
      }));
    };

    const petStore = {
      id: uuidv4(),
      ...input,
      cats: createPets("cat"),
      dogs: createPets("dog"),
    };

    petStores.push(petStore);

    return petStore;
  }
}
