"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Heart, MenuIcon, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "@/app/(marketplace)/_components/navbar-sidebar";
import { Input } from "@/components/ui/input";
import { Store } from "@/trpc/procedures/stores";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface Props {
  store: Store;
}

const FAKE_USER_ID = 1,
  FAKE_STORE_ID = 2;
export function Navbar({ store }: Props) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  if (
    store.ownerId === FAKE_USER_ID &&
    !navbarItems.find((entry) => entry.children === "Admin")
  ) {
    navbarItems.push({
      href: `/store/${FAKE_STORE_ID}/admin`,
      children: "Admin",
    });
  }

  return (
    <nav className="h-20 flex justify-between sticky top-0 z-50 border-b backdrop-blur">
      <Link href={`/store/${FAKE_STORE_ID}`} className="pl-6 flex items-center">
        <Heart className="size-6 text-rose-600" />
        <span
          className={cn(
            "text-2xl lg:text-3xl font-medium whitespace-nowrap pl-1.5",
            poppins.className
          )}
        >
          {store.name}
        </span>
      </Link>
      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSideBarOpen}
      />

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
      <div className="hidden relative lg:flex items-center pr-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="search"
          placeholder="Search products..."
          className="pl-10 w-48 lg:w-64"
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant="ghost"
          className="size-12 border-transparent"
          onClick={() => setIsSideBarOpen(true)}
        >
          <MenuIcon className="size-6" />
        </Button>
      </div>
    </nav>
  );
}

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const BASE = '/store'
const navbarItems = [
  { href: `${BASE}/${FAKE_STORE_ID}`, children: "Home" },
  { href: `${BASE}/${FAKE_STORE_ID}/products`, children: "Products" },
  { href: `${BASE}/${FAKE_STORE_ID}/about`, children: "About" },
  { href: `${BASE}/${FAKE_STORE_ID}/support`, children: "Support" },
];

function NavbarItem({ href, children, isActive }: NavbarItemProps) {
  return (
    <Button asChild variant="link" className={cn("text-sm xl:text-md", isActive && "underline")}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
