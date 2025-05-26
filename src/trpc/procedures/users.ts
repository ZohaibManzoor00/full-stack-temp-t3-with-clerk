import type { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../routers/_app";
import { createTRPCRouter, publicProcedure } from "@/trpc/init";
import z from "zod";
import { users } from "@/db/schema";

export const usersRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        firstName: z.string(),
        lastName: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.insert(users).values({
        email: input.email,
        firstName: input.firstName,
        lastName: input.lastName,
      });
    }),
});

type RouterOutput = inferRouterOutputs<AppRouter>;
export type Category = RouterOutput["users"]["createUser"];
