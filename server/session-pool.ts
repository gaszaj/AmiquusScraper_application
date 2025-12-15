import pg from "pg";

const sslEnabled =
  process.env.DATABASE_URL?.includes("sslmode=require");

export const sessionPool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: sslEnabled ? { rejectUnauthorized: false } : undefined,
});