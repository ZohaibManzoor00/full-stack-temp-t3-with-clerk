import { createTRPCRouter } from "../init";
import { categoriesRouter } from "../procedures/categories";
import { productRouter } from "../procedures/products";
import { storesRouter } from "../procedures/stores";
import { usersRouter } from "../procedures/users";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  products: productRouter,
  stores: storesRouter,
  users: usersRouter,
});

export type AppRouter = typeof appRouter;
