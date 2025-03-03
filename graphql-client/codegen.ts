import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "./src/**/*.graphql",
  generates: {
    "./src/generated/": { 
      preset: "client",
      presetConfig: {
        fragmentMasking: false
      },
      plugins: [],
      config: {
        scalars: {
          DateTime: "string",
          JSON: "any",
        },
        withHooks: true,
      }
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;