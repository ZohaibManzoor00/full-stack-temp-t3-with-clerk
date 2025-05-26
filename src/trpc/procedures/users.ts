import type { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../routers/_app";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import z from "zod";
import { users } from "@/db/schema";

export const usersRouter = createTRPCRouter({
  createUser: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        email: z.string().email(),
        firstName: z.string(),
        lastName: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.insert(users).values({
        id: ctx.auth.userId,
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName,
      });
    }),
});

type RouterOutput = inferRouterOutputs<AppRouter>;
export type CreateUserResult = RouterOutput["users"]["createUser"];
