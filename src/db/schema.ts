import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const postsTable = table("posts", {
  id: t.serial("id").primaryKey(),
  title: t.varchar({ length: 256 }),
});
