"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "./navbar-sidebar";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  return (
    <nav className="h-20 flex border-b justify-between font-medium">
      <Link href="/" className="pl-6 flex items-center">
        <span
          className={cn(
            "text-5xl font-semibold whitespace-nowrap",
            poppins.className
          )}
        >
          APP
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

        <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton>
      </div>

      {/* <div className="hidden lg:flex">
          <Button
            asChild
            variant="secondary"
            className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none transition-colors text-lg bg-white hover:bg-pink-400"
          >
            <Link href="/sign-in">Your store</Link>
          </Button>
        </div> */}

      <div className="hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none transition-colors text-lg bg-white hover:bg-pink-400"
        >
          <Link href="/sign-in">Log in</Link>
        </Button>

        <Button
          asChild
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none transition-colors text-lg bg-black text-white hover:bg-pink-400 hover:text-black"
        >
          <Link href="/sign-up">Start Selling</Link>
        </Button>
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

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

function NavbarItem({ href, children, isActive }: NavbarItemProps) {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent shadow-none px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
