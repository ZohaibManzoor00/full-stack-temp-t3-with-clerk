import { db } from "@/db/init";
import { products } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { AppRouter } from "../routers/_app";
import { inferRouterOutputs } from "@trpc/server";

export const productRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async () => {
    const allProducts = await db.select().from(products).limit(100);
    return allProducts;
  }),
});

type RouterOutput = inferRouterOutputs<AppRouter>;
export type Product = RouterOutput['products']['getAll'][number]