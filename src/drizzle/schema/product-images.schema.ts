import { relations } from 'drizzle-orm';
import { integer, numeric, pgTable, serial, text } from 'drizzle-orm/pg-core';

import { product } from './product.schema';

export const productImages = pgTable('productImages', {
  id: serial('id').primaryKey(),
  imageUrl: text('imageUrl').notNull(),
  productId: integer('productId').references(() => product.id),
});

export const productImagesRelations = relations(productImages, ({ one }) => ({
  product: one(product, {
    fields: [productImages.productId],
    references: [product.id],
  }),
}));