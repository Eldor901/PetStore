import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

export interface Cat {
  id: string;
  name: string;
  breed: string;
}

export interface Dog {
  id: string;
  name: string;
  breed: string;
}

export interface PetStore {
  id: string;
  name: string;
  email: string;
  profileUrl: string;
  cats: Cat[];
  dogs: Dog[];
}

export interface PetStoreInput {
  name: string;
  email: string;
  profileUrl: string;
}

const petStores: PetStore[] = [];

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

export const PetStoreModel = {
  getAll: (): PetStore[] => petStores,

  create: (input: PetStoreInput): PetStore => {
    const petStore: PetStore = {
      id: uuidv4(),
      ...input,
      cats: createPets("cat"),
      dogs: createPets("dog"),
    };
    petStores.push(petStore);
    return petStore;
  },
};
