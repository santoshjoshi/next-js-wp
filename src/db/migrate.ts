import { env } from "@/env/server";
import { migrate } from "drizzle-orm/mysql2/migrator"; // MySQL migrator
import { client, db } from "./index"; // Assumes db is set up for MySQL

import config from "@/../drizzle.config";

// Ensure the migration environment variable is set
if (!env.DB_MIGRATING) {
  throw new Error("You must set DB_MIGRATING to true.");
}


await migrate(db, { migrationsFolder: config.out! });

// End the client connection after migrations complete
await client.end();
