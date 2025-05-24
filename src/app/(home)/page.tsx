// import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getQueryClient, trpc } from "@/trpc/server";
import { Product } from "@/trpc/procedures/products";
import Image from "next/image";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ProductList, ProductListSkeleton } from "./_components/load-products-client";
import { Suspense } from "react";

export default async function Page() {
  const queryClient = getQueryClient();
  // const products = await queryClient.fetchQuery(trpc.products.getAll.queryOptions());
  void queryClient.prefetchQuery(trpc.products.getAll.queryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>

      {/* <div className="bg-blue-900">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 max-w-5xl ml-auto place-items-center bg-red-900">
        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div> */}
    </HydrationBoundary>
  );
}
