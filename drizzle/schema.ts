import { pgTable, serial } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const streak = pgTable("streak", {
  id: serial("id").primaryKey().notNull(),
});
