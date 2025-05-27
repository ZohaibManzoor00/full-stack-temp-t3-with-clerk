import { Suspense } from "react";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ProductList, ProductListSkeleton } from "../_components/load-products-client";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ category?: string }>;
}

export default async function MarketPlacePage({ params }: Props) {
  const { category } = await params;
  const queryClient = getQueryClient();
  void queryClient.prefetchInfiniteQuery(
    trpc.products.infiniteProducts.infiniteQueryOptions({
      cursor: null,
      categorySlug: category,
    })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FeaturedProductsCarousel />
      <Suspense fallback={<ProductListSkeleton />}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <ProductList category={category} />
        </div>
      </Suspense>
    </HydrationBoundary>
  );
}

function FeaturedProductsCarousel() {
  return ( <></>)
}