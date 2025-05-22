"use client";

import SignInOutButton from "@/components/shared/sign-out-button-custom";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export default function DashboardPage() {
  const trpc = useTRPC();
  const { error, data, isFetching } = useQuery(
    trpc.posts.getAll.queryOptions()
  );


  if (isFetching) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        <h2>Error occurred:</h2>
        <pre>{error.message}</pre>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
  return (
    <>
      <SignInOutButton />
      {JSON.stringify(data, null, 2)}
    </>
  );
}
