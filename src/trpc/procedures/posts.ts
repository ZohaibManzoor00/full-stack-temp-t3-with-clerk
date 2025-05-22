import { db } from "@/db/init";
import { postsTable } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

export const postRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const posts = await db.select().from(postsTable);
    return posts;
  }),
});
