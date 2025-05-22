import { createTRPCRouter } from "../init";
import { postRouter } from "../procedures/posts";

export const appRouter = createTRPCRouter({
  posts: postRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
