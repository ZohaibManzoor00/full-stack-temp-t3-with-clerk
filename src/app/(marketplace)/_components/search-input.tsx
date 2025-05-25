import { Input } from "@/components/ui/input";
import { Category } from "@/trpc/procedures/categories";
import { ListFilterIcon, SearchIcon } from "lucide-react";
// import { CategoriesSidebar } from "./categories-sidebar";
import { Button } from "@/components/ui/button";

interface Props {
  disabled?: boolean;
  categories: Category[]
}

export default function SearchInput({ disabled }: Props) {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input
          className="pl-8"
          placeholder="Search products"
          disabled={disabled}
        />
      </div>


      <Button className="size-12 shrink-0 flex lg:hidden"
      // onClick={() => setIsSideBarOpen(true)}
      >
        <ListFilterIcon />

      </Button>
    </div>
  );
}
