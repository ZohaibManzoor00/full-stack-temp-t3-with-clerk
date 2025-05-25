"use client";

import { Button } from "@/components/ui/button";
import { useDropDownPosition } from "@/hooks/use-dropdown-position";
import { cn } from "@/lib/utils";
import { Category } from "@/trpc/procedures/categories";
import { useRef, useState } from "react";
import { SubcategoryMenu } from "./subcategory-menu";

interface Props {
  category: Category;
  isActive: boolean;
  isNavHover: boolean;
}
export function CategoryDropdown({ category, isActive, isNavHover }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { getDropDownPosition } = useDropDownPosition(dropDownRef);
  const dropdownPosition = getDropDownPosition();

  const onMouseEnter = () => {
    if (category.subcategories) {
      setIsOpen(true);
    }
  };

  const onMouseLeave = () => setIsOpen(false);

  return (
    <div
      className="relative"
      ref={dropDownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative">
        <Button
          variant={isActive ? "default" : "outline"}
          className={cn(
            // "hover:bg-red-900",
            isActive && !isNavHover && "border-primary"
          )}
        >
          {category.name}
        </Button>
        {category.subcategories && category.subcategories.length > 0 && (
          <div
            className={cn(
              "opacity-0 absolute -bottom-3 w-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-black left-1/2 -translate-x-1/2",
              isOpen && "opacity-100"
            )}
          />
        )}
      </div>

      <SubcategoryMenu
        category={category}
        isOpen={isOpen}
        position={dropdownPosition}
      />
    </div>
  );
}
