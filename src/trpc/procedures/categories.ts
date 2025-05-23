import { asc } from "drizzle-orm";
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { AppRouter } from "../routers/_app";
import { db } from "@/db/init";
import { categoriesTable, subCategoriesTable } from "@/db/schema";
import {
  createTRPCRouter,
  publicProcedure,
} from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const categories = await db.select().from(categoriesTable).orderBy(asc(categoriesTable.name));
    const subcategories = await db.select().from(subCategoriesTable);

    const groupSubWithCategory = categories.map((cat) => ({
      ...cat,
      subcategories: subcategories.filter((sub) => sub.parent === cat.id),
    }));

    return groupSubWithCategory;
  }),
});

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;
export type Category = RouterOutput['categories']['getAll'][number]
