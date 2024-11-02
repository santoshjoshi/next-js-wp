import { mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import users from "./users";

import { createInsertSchema} from "drizzle-zod";
import { relations } from "drizzle-orm";

const guestbookEntries = mysqlTable("guestbook_entries", {
  id: varchar("id", { length: 255 })
  .primaryKey()
  .$defaultFn(() => crypto.randomUUID()),
  userId: varchar("userId", { length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
});
 
// Schema for inserting a user - can be used to validate API requests
export const guestBookInsertSchema = createInsertSchema(guestbookEntries).omit({
  userId: true,
  createdAt: true
});

export const guestbookEntriesRelations = relations(
  guestbookEntries,
  ({ one }) => ({
    user: one(users, {
      fields: [guestbookEntries.userId],
      references: [users.id],
    }),
  })
);


export default guestbookEntries;