import { defineConfig } from "drizzle-kit";

import { env } from "./src/app/env/server";

export default defineConfig({
  dialect: "mysql",
  schema: "./src/app/db/schema/index.ts",
  out: "./src/app/db/migrations",
  dbCredentials : { 
    host: env.DB_HOST,
    user: env.DB_USER,
    database: env.DB_NAME,
    password: env.DB_PASSWORD,
 }
});