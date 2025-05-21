import { createTRPCRouter } from "../init";
import { userRouter } from "../procedures/test";

export const appRouter = createTRPCRouter({
  users: userRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;
