import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { PetStoreResolver } from "./resolvers/PetStoreResolver";

const PORT = 4000

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [PetStoreResolver],
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();