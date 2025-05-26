import { z } from "zod";
import { and, eq, gt } from "drizzle-orm";
import { categories, products, users } from "@/db/schema";
import { createTRPCRouter, publicProcedure } from "@/trpc/init";
import { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../routers/_app";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const allProducts = await ctx.db.select().from(products).limit(100);
    return allProducts;
  }),
  infiniteProducts: publicProcedure
    .input(
      z.object({
        cursor: z.number().nullish(),
        categorySlug: z.string().nullish().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const conditions = [];
      const limit = 5;

      if (input.cursor != null) {
        conditions.push(gt(products.id, input.cursor));
      }

      if (input.categorySlug) {
        conditions.push(eq(categories.slug, input.categorySlug));
      }

      // const query = ctx.db
      //   .select()
      //   .from(products)
      //   .where(conditions.length ? and(...conditions) : undefined)
      //   .orderBy(products.id)
      //   .limit(limit + 1);

      // const rows = await query;
      const rows = await ctx.db
        .select({
          id: products.id,
          title: products.title,
          description: products.description,
          price: products.price,
          storeId: products.storeId,
          currency: products.currency,
          imageUrl: products.imageUrl,
          createdAt: products.createdAt,
          updatedAt: products.updatedAt,
          categorySlug: categories.slug,
          categoryName: categories.name,
          ownerFirstName: users.firstName,
        })
        .from(products)
        .leftJoin(categories, eq(products.categoryId, categories.id))
        .leftJoin(users, eq(products.ownerId, users.id))
        .where(conditions.length ? and(...conditions) : undefined)
        .orderBy(products.id)
        .limit(limit + 1);
      const hasMore = rows.length > limit;

      return {
        products: rows.slice(0, limit),
        nextCursor: hasMore ? rows[limit].id : null,
      };
    }),
});

type RouterOutput = inferRouterOutputs<AppRouter>;
export type Product = RouterOutput["products"]["getAll"][number];
export type MarketProducts = RouterOutput["products"]["infiniteProducts"]["products"][number];
