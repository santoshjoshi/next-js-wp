# Project README

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

This project includes the following integrations:

- **[Tailwind CSS](https://tailwindcss.com/):** For utility-first CSS styling.
- **GraphQL:** Fetching data via GraphQL queries, with [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) for type-safe code generation.
- **[NextAuth.js](https://next-auth.js.org/):** For authentication.
- **MySQL Integration:** Fetching and managing data with MySQL.
- **WordPress GraphQL:** Fetching data from a WordPress server using GraphQL.

---

## Getting Started

### Development Setup

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 in your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

### Tailwind CSS

This project uses Tailwind CSS for styling. Refer to the Tailwind documentation for guidance on creating styles and components.


###  GraphQL Code Generation
To generate types and queries based on your GraphQL schema:

```
npx drizzle-kit generate --config=drizzle.config.ts
```
To apply migrations for Drizzle ORM:

```
npx drizzle-kit migrate --config=drizzle.config.ts
```

Useful resources for GraphQL Code Generator setup:

- [GraphQL Codegen Config Reference](https://the-guild.dev/graphql/codegen/docs/config-reference/codegen-config)
- [GraphQL Codegen with WPGraphQL](https://wpengine.com/builders/graphql-code-generator-for-wpgraphql/)
- [Apollo GraphQL Tutorials](https://www.apollographql.com/tutorials/lift-off-part1/09-codegen)


### Authentication

The app integrates NextAuth.js for authentication. For configuration:

Update the environment variables in your .env.local file.
Check out the NextAuth.js documentation for detailed instructions.


### Data Sources

#### MySQL

The app connects to a MySQL database. Ensure your database credentials are properly configured in the environment file.

#### WordPress GraphQL

Data is also fetched from a WordPress server using GraphQL. To use this feature:

- Configure the WordPress server's GraphQL endpoint.
- Define GraphQL queries in your project, leveraging type safety provided by GraphQL Code Generator.

Learn More
To dive deeper into the technologies used in this project, explore the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and APIs.
- [Learn Next.js](https://nextjs.org/docs) - an interactive tutorial.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about utility-first styling.
- [GraphQL Code Generator Docs](https://the-guild.dev/graphql/codegen) - type-safe GraphQL development.
- [NextAuth.js Documentation]() - setup and configuration for authentication.

## Deployment

Will be deploying this project to OCI (Oracle Cloud Infrastructure)

Enjoy building! 🎉
