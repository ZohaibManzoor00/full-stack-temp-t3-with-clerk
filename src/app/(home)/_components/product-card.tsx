import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Product } from "@/trpc/procedures/products";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <>
      <div className="border rounded shadow-sm overflow-hidden">
        <Link href={"/"}>
        <div className="aspect-[4/3]">
          <Image
            src={"/placeholder.png"}
            alt="Product image"
            height={300}
            width={300}
            className="h-full w-full object-cover"
            />
            </div>
          <div className="p-4">
            <h1 className="text-lg">{product.title}</h1>
            <Badge className="px-4 mt-2 py-1.5">${product.price}</Badge>
          </div>
        </Link>
      </div>
    </>
  );
}
