import { z } from "zod";
import { and, eq, gt, sql } from "drizzle-orm";
import { categories, products, users } from "@/db/schema";
import { createTRPCRouter, publicProcedure } from "@/trpc/init";
import { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../routers/_app";

export const productRouter = createTRPCRouter({
  getFeatured: publicProcedure.query(async ({ ctx }) => {
    const featuredProducts = await ctx.db.select().from(products).orderBy(sql`RANDOM()`).limit(8);
    return featuredProducts;
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
      const limit = 10;

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
export type FeaturedProducts = RouterOutput["products"]["getFeatured"][number];
export type MarketProducts = RouterOutput["products"]["infiniteProducts"]["products"][number];
