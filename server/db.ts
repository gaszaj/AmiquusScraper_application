import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@shared/schema";
import pg from "pg";
import dotenv from 'dotenv';

dotenv.config();
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

const sslEnabled =
  process.env.DATABASE_URL?.includes("sslmode=require");

export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: sslEnabled ? { rejectUnauthorized: false } : undefined,
});

export const db = drizzle(pool, { schema });
