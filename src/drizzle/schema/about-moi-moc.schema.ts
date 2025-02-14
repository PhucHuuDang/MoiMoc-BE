import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { imagesModelsSchema } from "./images-models.schema";

export const aboutMoiMocSchema = pgTable("aboutMoiMoc", {
  id: serial("id").primaryKey().notNull(),
  imageUrls: text("imageUrls"),
  story: text("story").notNull(),
  mission: text("mission").notNull(),
  vision: text("vision").notNull(),
});

export const aboutMoiMocRelations = relations(
  aboutMoiMocSchema,
  ({ one, many }) => ({
    imagesModels: many(imagesModelsSchema),
  })
);

export type AboutMoiMocInsertTypes = typeof aboutMoiMocSchema.$inferInsert;

export type AboutMoiMocSelectTypes = typeof aboutMoiMocSchema.$inferSelect;
