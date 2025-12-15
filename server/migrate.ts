import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db, pool } from "./db";

await migrate(db, { migrationsFolder: "./migrations" });

console.log("✅ Database initialized");
await pool.end();
