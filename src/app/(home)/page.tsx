import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { getQueryClient, trpc } from "@/trpc/server";

export default async function Page() {
  // const queryClient = getQueryClient();
  // const categories = await queryClient.fetchQuery(
  //   trpc.categories.getAll.queryOptions()
  // );

  return (
    <>
      <h1>Hello</h1>
      {/* {JSON.stringify(categories, null, 2)} */}
      <Button>
        <Link href="/dashboard">View Dashboard</Link>
      </Button>
    </>
  );
}
