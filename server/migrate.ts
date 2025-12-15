import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db, pool } from "./db";

migrate(db, { migrationsFolder: "./migrations" });

console.log("✅ Database initialized");
pool.end();
