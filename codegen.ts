import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphql.anilist.co",
  documents: "src/**/*.graphql",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        skipTypename: true,
      },
    },
  },
};

export default config;
