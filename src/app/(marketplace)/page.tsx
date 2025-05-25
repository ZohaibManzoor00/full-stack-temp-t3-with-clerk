// import { Suspense } from "react";
// import { getQueryClient, trpc } from "@/trpc/server";
// import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import {
  ProductList,
  // ProductListSkeleton,
} from "./_components/load-products-client";

export default async function MarketPlacePage() {
  // const queryClient = getQueryClient();
  // void queryClient.prefetchInfiniteQuery(
  //   trpc.products.infiniteProducts.infiniteQueryOptions({ cursor: null })
  // );

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    //   <Suspense fallback={<ProductListSkeleton />}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <ProductList />
        </div>
    //   </Suspense>
    // </HydrationBoundary>
  );
}
