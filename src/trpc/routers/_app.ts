import { createTRPCRouter } from "../init";
import { categoriesRouter } from "../procedures/categories";
import { productRouter } from "../procedures/products";
import { storesRouter } from "../procedures/stores";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  products: productRouter,
  stores: storesRouter
});

export type AppRouter = typeof appRouter;
