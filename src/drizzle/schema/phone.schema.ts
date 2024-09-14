import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { user } from './user.schema';
import { relations } from 'drizzle-orm';

export type NewPhoneNumber = typeof phone.$inferInsert;

export const phone = pgTable('phone', {
  id: serial('id ').primaryKey(),
  phone: text('phone').notNull(),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
  userId: integer('userId')
    .references(() => user.id, { onDelete: 'cascade' })
    .notNull(),
});

export const phoneRelations = relations(phone, ({ one }) => ({
  user: one(user, {
    fields: [phone.userId],
    references: [user.id],
  }),
}));
