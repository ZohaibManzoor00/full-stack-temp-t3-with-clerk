import type { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../routers/_app";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import z from "zod";
import { users } from "@/db/schema";

export const usersRouter = createTRPCRouter({
  createUser: protectedProcedure
    .input(
      z.object({
        email: z.string().email(),
        firstName: z.string(),
        lastName: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.auth.userId;

      const existing = await ctx.db.query.users.findFirst({
        where: (u, { eq }) => eq(u.id, userId),
      });

      if (existing) return existing;

      return await ctx.db.insert(users).values({
        id: userId,
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName,
      });
    }),
});

type RouterOutput = inferRouterOutputs<AppRouter>;
export type CreateUserResult = RouterOutput["users"]["createUser"];
