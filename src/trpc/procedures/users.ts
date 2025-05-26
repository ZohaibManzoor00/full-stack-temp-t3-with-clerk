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
      console.log("CREATE USER called", ctx.auth.userId);
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

  getUserById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.query.users.findFirst({
        where: (u, { eq }) => eq(u.id, input.id),
      });
    }),
});

type RouterOutput = inferRouterOutputs<AppRouter>;
export type CreateUserResult = RouterOutput["users"]["createUser"];
