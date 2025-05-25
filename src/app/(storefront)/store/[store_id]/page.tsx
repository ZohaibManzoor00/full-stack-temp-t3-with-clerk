import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const FAKE_STORE_ID = 1;

export default function PersonalStorefrontPage() {
  return (
    <>
      <Hero />
      <div className="h-32" />

      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl text-center">
          Featured Products
        </h1>
        <p className="text-center mt-2 text-lg lg:text-2xl xl:text-3xl">Discover our handpicked selection of premium items</p>
        <div className="h-10" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <Featured />
      </div>

      <div className="h-96" />
    </>
  );
}

function Featured() {
  const featuredProducts = [
    {
      id: "1",
      title: "Smart Pricing Tool",
      description: "AI-powered pricing optimization for global markets",
      price: "29",
      image: "/bg-placeholder.svg?height=300&width=300",
    },
    {
      id: "2",
      title: "Market Analytics",
      description: "Deep insights into market trends and pricing strategies",
      price: "49",
      image: "/bg-placeholder.svg?height=300&width=300",
    },
    {
      id: "3",
      title: "Dynamic Pricing API",
      description: "Real-time pricing adjustments based on location and demand",
      price: "99",
      image: "/bg-placeholder.svg?height=300&width=300",
    },
  ];
  return (
    <>
      {featuredProducts.map((product) => (
        <div
          key={product.id}
          className="group bg-card text-card-foreground rounded-lg border border-border hover:shadow-lg transition-all duration-300"
        >
          <div className="aspect-square relative overflow-hidden rounded-t-lg bg-muted">
            <Image
              src={product.image || "/bg-placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-card-foreground mb-2">
              {product.title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary">
                ${product.price}
              </span>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function Hero() {
  return (
    <div>
      <Image
        src={"/placeholder.png"}
        width={100}
        height={100}
        alt="personal store hero"
        className="object-fit h-[500px] w-full"
      />
      <div className="-mt-[400px]">
        <section className="flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl tracking-tight m-4 font-bold">
            Price Smarter, Sell Bigger!
          </h1>
          <p className="text-lg lg:text-2xl xl:text-3xl max-w-screen-xl">
            Optimize your product pricing across countries to maximize sales.
            Capture 85% of the untapped market with location-based dynamic
            pricing
          </p>
          <Button
            asChild
            className="text-md p-6 lg:p-6 xl:p-7 lg:text-lg xl:text-xl rounded-xl flex gap-1 group"
          >
            <Link href={`/store/${FAKE_STORE_ID}/products`}>
              Browse products
              <ArrowRightIcon className="size-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
