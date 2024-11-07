import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "https://whiteboardtalks.com/graphql",
    documents: ["src/**/*.tsx"],
    generates: {
        "./src/__generated__/": {
          preset: "client",
          presetConfig: {
            gqlTagName: "gql",
          },
        },
        "./src/__generated__/types.ts": {
            plugins: ["typescript", "typescript-operations"],
        },
      },
      ignoreNoDocuments: true,
  };

export default config;