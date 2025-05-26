"use client";

import { useParams } from "next/navigation";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

import Categories from "./categories";
import SearchInput from "./search-input";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";

export function SearchFilters() {
  const trpc = useTRPC();
  const { data: categories } = useSuspenseQuery(
    trpc.categories.getAll.queryOptions()
  );

  const params = useParams();
  const categoryParam = params.category as string | undefined;
  const activeCategory = categoryParam || "all";

  const activeCategoryData = categories.find(
    (cat) => cat.slug === activeCategory
  );

  const activeCategoryColor = activeCategoryData?.color || "#F5F5F5";
  // const activeCategoryName = activeCategoryData?.name || null;

  // const activeSubcategory = params?.subcategory as string | undefined;
  // const activeSubcategoryName = activeCategoryData?.subcategories?.find(
  //   (sub) => sub.slug === activeSubcategory
  // );

  return (
    <div
      className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full"
      style={{ backgroundColor: activeCategoryColor }}
    >
      <SearchInput categories={categories} />
      <div className="hidden lg:block">
        <Categories categories={categories} />
      </div>
      {/* <BreadCrumbNavigation
        activeCategory={activeCategory}
        activeCategoryName={activeCategoryName}
        activeSubcategoryName={activeSubcategoryName}
      /> */}
    </div>
  );
}

// interface Props {
//   activeCategory: boolean 
//   activeCategoryName: string 
//   activeSubcategoryName: string
// }

// function BreadCrumbNavigation({ activeCategory, activeCategoryName, activeSubcategoryName }: Props) {
//   return <></>;
// }
