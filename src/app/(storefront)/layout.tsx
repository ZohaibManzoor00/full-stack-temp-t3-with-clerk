import { getQueryClient, trpc } from "@/trpc/server";

import { Footer } from "./_components/store-footer";
import { Navbar } from "./_components/store-navbar";

const FAKE_STORE_ID = 1;

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const queryClient = getQueryClient();
  const store = await queryClient.fetchQuery(trpc.stores.getStore.queryOptions({ storeId: FAKE_STORE_ID }));

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Navbar store={store} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
    </>
  );
}
