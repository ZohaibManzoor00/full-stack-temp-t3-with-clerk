import { eq } from "drizzle-orm";
import { z } from "zod";
import type { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../routers/_app";
import { stores } from "@/db/schema";
import { createTRPCRouter, publicProcedure } from "@/trpc/init";

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
});

// type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;
export type Store = RouterOutput["stores"]["getStore"];
