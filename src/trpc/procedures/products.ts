import { z } from "zod";
import { and, gt } from "drizzle-orm";
import { products } from "@/db/schema";
import {
  createTRPCRouter,
  // protectedProcedure,
  publicProcedure,
} from "@/trpc/init";
import { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../routers/_app";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const allProducts = await ctx.db.select().from(products).limit(100);
    return allProducts;
  }),
  infiniteProducts: publicProcedure
    .input(z.object({ cursor: z.number().nullish() }))
    .query(async ({ ctx, input }) => {
      const limit = 3;
      const conditions = [];

      if (input.cursor != null) {
        conditions.push(gt(products.id, input.cursor));
      }

      const query = ctx.db
        .select()
        .from(products)
        .where(conditions.length ? and(...conditions) : undefined)
        .orderBy(products.id)
        .limit(limit + 1);

      const rows = await query;
      const hasMore = rows.length > limit;

      return {
        products: rows.slice(0, limit),
        nextCursor: hasMore ? rows[limit].id : null,
      };
    }),
});

type RouterOutput = inferRouterOutputs<AppRouter>;
export type Product = RouterOutput["products"]["getAll"][number];
