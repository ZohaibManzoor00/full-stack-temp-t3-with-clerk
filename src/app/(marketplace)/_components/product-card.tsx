import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { MarketProducts } from "@/trpc/procedures/products";

interface Props {
  product: MarketProducts;
}

export function ProductCard({ product }: Props) {
  const linkToProductAtStore = `/store/${product.storeId}/products/${product.id}`;

  return (
    <div className="border rounded-2xl shadow-sm bg-white hover:shadow-md transition overflow-hidden">
      <Link href={linkToProductAtStore}>
        <div className="aspect-[4/3] w-full bg-gray-100">
          <Image
            src={product.imageUrl || "/placeholder.png"}
            alt={product.title || "Product image"}
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="p-4">
          <h2 className="text-sm font-semibold text-gray-800 truncate">
            {product.title}
          </h2>

          {product.ownerFirstName && (
            <p className="text-xs text-gray-400">By {product.ownerFirstName}</p>
          )}

          {product.categoryName && (
            <Badge
              variant="outline"
              className="text-xs text-gray-500 uppercase tracking-wide font-medium"
            >
              {product.categoryName}
            </Badge>
          )}
 
          {product.price != null && (
            <div className="mt-2">
              <Badge className="bg-black text-white hover:bg-gray-800">
                ${product.price}
              </Badge>
            </div>
          )}
       </div>
      </Link>
    </div>
  );
}
