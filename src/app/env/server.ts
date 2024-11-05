import { createEnv } from "@t3-oss/env-nextjs";
import { z, ZodError } from "zod";
 
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    AUTH_GOOGLE_ID: z.string(),
    AUTH_GOOGLE_SECRET: z.string(),
    NEXTAUTH_SECRET:z.string(),
    DB_HOST: z.string(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    DB_PORT: z.coerce.number(),
    DATABASE_URL: z.string(),
    DB_MIGRATING: z
    .string()
    .refine((s) => s === "true" || s === "false")
    .transform((s) => s === "true")
    .optional(),
    NEXT_PUBLIC_WORDPRESS_API_URL: z.string().url()
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    );
    throw new Error("Invalid environment variables");
  },
  onInvalidAccess(variable) {
    throw new Error(
      `❌ Attempted to access a server-side environment variable on the client ${ variable}`
    );
  },
  emptyStringAsUndefined: false,
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env
});
