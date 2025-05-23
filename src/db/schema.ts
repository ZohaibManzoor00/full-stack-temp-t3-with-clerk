import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const postsTable = table("posts", {
  id: t.serial("id").primaryKey(),
  title: t.varchar({ length: 256 }),
});

export const categoriesTable = table("categories", {
  id: t.serial("id").primaryKey(),
  name: t.varchar({ length: 256 }),
  slug: t.varchar({ length: 64 }),
  color: t.char({ length: 8 }),
});

export const subCategoriesTable = table("subcategories", {
  id: t.serial("id").primaryKey(),
  name: t.varchar({ length: 256 }),
  slug: t.varchar({ length: 64 }),
  parent: t
    .integer()
    .references(() => categoriesTable.id, { onDelete: "cascade" }),
});
