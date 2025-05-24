import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const users = table("users", {
  id: t.serial("id").primaryKey(),
  email: t.varchar("email", { length: 128 }),
  joinedAt: t.date("joined_at").defaultNow(),
});

export const stores = table("stores", {
  id: t.serial("id").primaryKey(),
  ownerId: t.integer("owner_id").references(() => users.id),
  name: t.varchar("name", { length: 64 }),
  slug: t.varchar("slug", { length: 128 }),
  isOnline: t.boolean("is_online").default(false),
  createdAt: t.timestamp("created_at").defaultNow(),
});

export const products = table("products", {
  id: t.serial("id").primaryKey(),
  storeId: t.integer("store_id").references(() => stores.id),
  ownerId: t.integer("owner_id").references(() => users.id),
  slug: t.varchar("slug", { length: 64 }),
  title: t.varchar("title", { length: 256 }),
  description: t.varchar("description", { length: 512 }),
  price: t.integer("price"),
  currency: t.varchar("currency", { length: 3 }),
  imageUrl: t.varchar("image_url", { length: 256 }),
  createdAt: t.timestamp("created_at").defaultNow(),
  updatedAt: t.timestamp("updated_at").defaultNow(),
});

export const categories = table("categories", {
  id: t.serial("id").primaryKey(),
  name: t.varchar("name", { length: 256 }),
  slug: t.varchar("slug", { length: 64 }),
  color: t.char("color", { length: 8 }),
});

export const subCategories = table("subcategories", {
  id: t.serial("id").primaryKey(),
  name: t.varchar("name", { length: 256 }),
  slug: t.varchar("slug", { length: 64 }),
  parent: t
    .integer("parent_id")
    .references(() => categories.id, { onDelete: "cascade" }),
});
