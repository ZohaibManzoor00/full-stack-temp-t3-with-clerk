import { createTRPCRouter } from "../init";
import { categoriesRouter } from "../procedures/categories";
import { postRouter } from "../procedures/posts";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  post: postRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
