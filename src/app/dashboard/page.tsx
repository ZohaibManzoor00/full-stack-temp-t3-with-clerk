"use client";

import SignInOutButton from "@/components/shared/sign-out-button-custom";
import { useTRPC } from "@/trpc/client";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

export default function DashboardPage() {
  const trpc = useTRPC();
  const test = useQuery(trpc.users.getMany.queryOptions());
  const user = useUser();

  return (
    <>
      <SignInOutButton />
      <div>{JSON.stringify(test.data, null, 2)}</div>
      {user && <div>{JSON.stringify(user, null, 2)}</div>}
    </>
  );
}
