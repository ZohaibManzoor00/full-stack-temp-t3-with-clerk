import { db } from "@/db/init";
import { auth } from "@clerk/nextjs/server";

export const createContext = async () => {
  return { auth: await auth(), db: db };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
