import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import { env } from "../env/server";
import * as schema from "./schema/index";


export const client = mysql.createPool({
  host: env.DB_HOST,
  user: env.DB_USER,
  database: env.DB_NAME,
  password: env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: env.DB_MIGRATING ? 1 : 10, // Optional: limit connections during migration
  queueLimit: 0,
});


// Initialize Drizzle with the MySQL pool
export const db = drizzle(client, {
    schema,
    mode: "default",
});