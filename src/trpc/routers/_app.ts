import { createTRPCRouter } from "../init";
import { categoriesRouter } from "../procedures/categories";
import { productRouter } from "../procedures/products";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  products: productRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
