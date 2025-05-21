import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const userRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    return [{ hello: "world" }];
  }),
});
