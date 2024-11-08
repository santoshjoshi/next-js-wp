import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://whiteboardtalks.com/graphql",  // Your WordPress GraphQL API endpoint
  documents: ["src/**/*.graphql"],  // Include queries from .graphql files
  generates: {
    // This will generate GraphQL queries, mutations, and subscriptions as JS code
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",  // You can adjust the tag name as needed
      },
    },
    // This will generate types for your GraphQL operations and Apollo
    "./src/__generated__/types.ts": {
      plugins: [
        "typescript",           // Generate TypeScript types
        "typescript-operations", // Generate types for operations (queries, mutations)
        "typescript-react-apollo",  // Add Apollo-specific types
      ],
    },
  },
  ignoreNoDocuments: true,  // Ignore errors if no queries are found in documents
};

export default config;
