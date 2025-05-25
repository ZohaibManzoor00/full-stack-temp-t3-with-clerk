"use client";

// import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useTRPC } from "@/trpc/client";

import { Button } from "@/components/ui/button";
import { ProductCard } from "./product-card";

export function ProductList() {
  const trpc = useTRPC();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
    isLoading,
  } = useInfiniteQuery(
    trpc.products.infiniteProducts.infiniteQueryOptions(
      { cursor: null },
      { getNextPageParam: (lastPage) => lastPage.nextCursor }
    )
  );
  const products = data?.pages.flatMap((page) => page.products) ?? [];

  const { ref } = useInView();
  //   useEffect(() => {
  //     if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage();
  //   }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <ProductListSkeleton />;
  if (isError) {
    return (
      <div className="text-center py-8">
        Something went wrong: {error.message}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">No products found.</div>
    );
  }

  return (
    // <div className="max-w-6xl mx-auto px-4 py-8">
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div ref={ref} className="h-8" />

      <div className="flex justify-center mt-6">
        {hasNextPage ? (
          <Button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800 disabled:opacity-50"
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        ) : (
          <div className="text-gray-500">You reached the bottom.</div>
        )}
      </div>
    </>
    // </div>
  );
}

export function ProductListSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Array.from({ length: 12 }).map((_, idx) => (
          <div
            className="h-66 opacity-50 bg-background animate-pulse"
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}
