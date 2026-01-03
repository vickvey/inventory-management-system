import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // your drizzle instance
import { nextCookies } from "better-auth/next-js"
import * as DbSchema from "@/db/schema"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite", // or "mysql", "sqlite"
    schema: DbSchema
  }),
  emailAndPassword: {
    enabled: true
  },
  plugins: [nextCookies()]
});
