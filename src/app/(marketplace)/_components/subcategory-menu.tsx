import { Category } from "@/trpc/procedures/categories";
import Link from "next/link";

interface Props {
  category: Category;
  isOpen: boolean;
  position: { left: number; top: number };
}
export function SubcategoryMenu({
  category,
  isOpen,
  position: { top, left },
}: Props) {
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    return null;
  }

  const backgroundColor = category.color || "#F5F5F5";

  return (
    <div className="fixed z-100" style={{ top, left }}>
      <div className="h-3 w-60" />
      <div
        style={{ backgroundColor }}
        className="w-60 text-black rounded-md overflow-hidden border"
      >
        <div>
          {category.subcategories?.map((subcategory) => (
            <Link
              key={subcategory.slug}
              href={`/${category.slug}/${subcategory.slug}`}
              className="w-full text-left p-4 hover:underline hover:bg-black hover:text-white flex justify-between items-center font-medium"
            >
              {subcategory.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
