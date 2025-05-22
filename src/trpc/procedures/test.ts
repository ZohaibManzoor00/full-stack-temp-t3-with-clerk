import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

export const userRouter = createTRPCRouter({
  getMany: protectedProcedure.query(async ({ ctx }) => {
    return [{ hello: ctx.auth.userId }];
  }),
});
