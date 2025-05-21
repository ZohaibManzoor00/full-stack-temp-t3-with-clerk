import { getQueryClient, trpc } from "@/trpc/server";

export default async function Page() {
  const queryClient = getQueryClient()
  const test = await queryClient.fetchQuery(trpc.users.getMany.queryOptions())

  return <div>
    {JSON.stringify(test, null, 2)}
  </div>;
}
