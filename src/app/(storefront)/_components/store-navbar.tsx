"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
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

const FAKE_USER_ID = "1",
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
      {/* <div className="hidden lg:flex">
        <AnimatedNavbarItems />
      </div> */}
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

const BASE = "/store";
const navbarItems = [
  { href: `${BASE}/${FAKE_STORE_ID}`, children: "Home" },
  { href: `${BASE}/${FAKE_STORE_ID}/products`, children: "Products" },
  { href: `${BASE}/${FAKE_STORE_ID}/about`, children: "About" },
  { href: `${BASE}/${FAKE_STORE_ID}/support`, children: "Support" },
];

function NavbarItem({ href, children, isActive }: NavbarItemProps) {
  return (
    <Button
      asChild
      variant="link"
      className={cn("text-sm xl:text-md", isActive && "underline")}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export function AnimatedNavbarItems() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverStyle, setHoverStyle] = useState({});
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" });
  const [isDarkMode] = useState(false);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setTabRef = (index: number) => (el: HTMLDivElement | null) => {
    tabRefs.current[index] = el;
  };

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex];
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement;
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredIndex]);

  useEffect(() => {
    const activeElement = tabRefs.current[activeIndex];
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setActiveStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const overviewElement = tabRefs.current[0];
      if (overviewElement) {
        const { offsetLeft, offsetWidth } = overviewElement;
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    });
  }, []);

  return (
    <div
      className={`flex justify-center items-center w-full ${
        isDarkMode ? "dark bg-[#0e0f11]" : ""
      }`}
    >
      <Card
        className={`w-full border-none shadow-none relative flex items-center justify-center ${
          isDarkMode ? "bg-transparent" : ""
        }`}
      >
        <CardContent className="p-0">
          <div className="relative">
            {/* Hover Highlight */}
            <div
              className="absolute h-[30px] transition-all duration-300 ease-out bg-[#0e0f1114] dark:bg-[#ffffff1a] rounded-[6px] flex items-center"
              style={{
                ...hoverStyle,
                opacity: hoveredIndex !== null ? 1 : 0,
              }}
            />

            {/* Active Indicator */}
            <div
              className="absolute bottom-[-6px] h-[2px] bg-[#0e0f11] dark:bg-white transition-all duration-300 ease-out"
              style={activeStyle}
            />

            {/* Tabs */}
            <div className="relative flex space-x-[6px] items-center">
              {navbarItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <div
                    ref={setTabRef(index)}
                    className={`px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] ${
                      index === activeIndex
                        ? "text-[#0e0e10] dark:text-white"
                        : "text-[#0e0f1199] dark:text-[#ffffff99]"
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="text-sm xl:text-lg leading-5 whitespace-nowrap flex items-center justify-center h-full">
                      {item.children}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
