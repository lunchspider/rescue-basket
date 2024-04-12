import { sql } from "drizzle-orm";
import { pgTable, timestamp, uuid, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    created_at: timestamp("created_at")
        .default(sql`NOW()`)
        .notNull(),
});

export type User = typeof users.$inferSelect;
