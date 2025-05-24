import { asc } from "drizzle-orm";
import type { inferRouterOutputs } from '@trpc/server';
import { AppRouter } from "../routers/_app";
import { db } from "@/db/init";
import { categories, subCategories } from "@/db/schema";
import {
  createTRPCRouter,
  publicProcedure,
} from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const categoriesRes = await db.select().from(categories).orderBy(asc(categories.name));
    const subcategories = await db.select().from(subCategories);

    const groupSubWithCategory = categoriesRes.map((cat) => ({
      ...cat,
      subcategories: subcategories.filter((sub) => sub.parent === cat.id),
    }));

    return groupSubWithCategory;
  }),
});

// type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;
export type Category = RouterOutput['categories']['getAll'][number]
