import { eq } from "drizzle-orm";
import { z } from "zod";
import type { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../routers/_app";
import { stores } from "@/db/schema";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/trpc/init";

export const storesRouter = createTRPCRouter({
  getStore: publicProcedure
    .input(z.object({ storeId: z.number() }))
    .query(async ({ ctx, input }) => {
      const store = await ctx.db
        .select()
        .from(stores)
        .where(eq(stores.id, input.storeId))
        .then((rows) => rows[0]);
      return store;
    }),
  getStoreByOwnerId: protectedProcedure
    .input(z.object({ ownerId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.query.stores.findFirst({
        where: (s, { eq }) => eq(s.ownerId, input.ownerId),
      });
    }),
  createStore: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        slug: z.string().min(1),
        isOnline: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const store = await ctx.db.insert(stores).values({
        name: input.name,
        slug: input.slug,
        isOnline: input.isOnline,
        ownerId: ctx.auth.userId,
      });
      return store;
    }),
});

// type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;
export type Store = RouterOutput["stores"]["getStore"];
