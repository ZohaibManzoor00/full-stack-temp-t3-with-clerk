import type { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../routers/_app";
import { createTRPCRouter, publicProcedure } from "@/trpc/init";
import z from "zod";
import { users } from "@/db/schema";

export const usersRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        id: z.string(),
        email: z.string().email(),
        firstName: z.string(),
        lastName: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.query.users.findFirst({
        where: (u, { eq }) => eq(u.id, input.id),
      });
      if (existing) return existing;
      return await ctx.db.insert(users).values({
        id: input.id,
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName,
      });
    }),
});

type RouterOutput = inferRouterOutputs<AppRouter>;
export type Category = RouterOutput["users"]["createUser"];
