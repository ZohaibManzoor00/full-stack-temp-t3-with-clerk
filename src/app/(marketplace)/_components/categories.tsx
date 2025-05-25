"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";

import { Category } from "@/trpc/procedures/categories";
import { CategoryDropdown } from "./category-dropdown";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ListFilterIcon } from "lucide-react";
import { CategoriesSidebar } from "./categories-sidebar";

interface Props {
  categories: Category[];
}
export default function Categories({ categories }: Props) {
  const params = useParams();

  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const viewAllRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(categories.length);
  const [isAnyHovered, setIsAnyHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categoryParam = params.category as string | undefined;
  const activeCategory = categoryParam || "all";
  const activeCategoryIdx = categories.findIndex(
    (cat) => cat.slug === activeCategory
  );
  const isActiveCategoryHidden =
    activeCategoryIdx >= visibleCount && activeCategoryIdx !== -1;

  useEffect(() => {
    const calculateVisible = () => {
      if (!containerRef.current || !measureRef.current || !viewAllRef.current)
        return;

      const containerWidth = containerRef.current.offsetWidth;
      const viewAllWidth = viewAllRef.current.offsetWidth;
      const availableWidth = containerWidth - viewAllWidth;

      const items = Array.from(measureRef.current.children);
      let totalWidth = 0,
        visible = 0;

      for (const item of items) {
        const width = item.getBoundingClientRect().width;

        if (totalWidth + width > availableWidth) break;

        totalWidth += width;
        visible++;
      }
      setVisibleCount(visible);
    };

    const resizeObserver = new ResizeObserver(calculateVisible);
    resizeObserver.observe(containerRef.current!);

    return () => resizeObserver.disconnect();
  }, [categories.length]);

  return (
    <div className="relative w-full">
      <CategoriesSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>
      <div
        ref={measureRef}
        className="absolute opacity-0 pointer-events-none flex"
        style={{ position: "fixed", top: -9999, left: -9999 }}
      >
        {categories.map((category) => (
          <React.Fragment key={category.id}>
            <CategoryDropdown
              category={category}
              isActive={activeCategory === category.slug}
              isNavHover={false}
            />
          </React.Fragment>
        ))}
      </div>

      <div
        className="flex flex-nowrap items-center gap-x-1"
        ref={containerRef}
        onMouseEnter={() => setIsAnyHovered(true)}
        onMouseLeave={() => setIsAnyHovered(false)}
      >
        {categories.slice(0, visibleCount).map((category) => (
          <React.Fragment key={category.id}>
            <CategoryDropdown
              category={category}
              isActive={activeCategory === category.slug}
              isNavHover={isAnyHovered}
            />
          </React.Fragment>
        ))}

        <div ref={viewAllRef} className="shrink-0">
          <Button
            variant={isActiveCategoryHidden ? "default" : "outline"}
            className={cn(
              isActiveCategoryHidden && !isAnyHovered && "border-primary"
            )}
            onClick={() => setIsSidebarOpen(true)}
          >
            View All
            <ListFilterIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
