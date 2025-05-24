"use client";

import Link from "next/link";
import Image from "next/image";

import { useTRPC } from "@/trpc/client";
import { Product } from "@/trpc/procedures/products";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";

export function ProductList() {
  const trpc = useTRPC();
  const { data: products } = useSuspenseQuery(
    trpc.products.getAll.queryOptions()
  );

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="h-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export function ProductListSkeleton() {
  return <div>Loading...</div>;
}

interface Props {
  product: Product;
}
function ProductCard({ product }: Props) {
  return (
    <>
      <div className="border">
        <Link href={"/"}>
          <Image
            src={"/placeholder.png"}
            alt="Product image"
            height={300}
            width={300}
          />
          <div className="p-4">
            <h1>{product.title}</h1>
            <Badge className="px-4 mt-2 py-1.5">${product.price}</Badge>
          </div>
        </Link>
      </div>
    </>
  );
}
