// import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export function CategoriesSidebar({ open, onOpenChange }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="p-0 transition-none" side="left">
        <SheetHeader className="p-4 border-b">
          <SheetTitle></SheetTitle>
        </SheetHeader>
      </SheetContent>
      {/* CategoriesSidebar */}
    </Sheet>
  );
}
