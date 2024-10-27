"use client";

import { cn } from "@/lib/utils";
import { HomeIcon, PoundSterling, Settings, Ticket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const dashboardLinks = [
  {
    id: 0,
    name: "Dashboard",
    href: "/dashboard",
    icon: HomeIcon,
  },
   {
    id: 1,
    name: "Subscription",
    href: "/subscription",
    icon: Ticket,
  },
  {
    id: 2,
    name: "Products",
    href: "/products",
    icon: Settings,
  },
  {
    id: 3,
    name: "Analytics",
    href: "/analytics",
    icon: Settings,
  },
  {
    id: 4,
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function DasboardLinks() {
  const pathname = usePathname();
  return (
    <>
      {dashboardLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn(
            pathname === link.href
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:text-foreground",
            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-green-500 ",
          )}
        >
          <link.icon className="h-4 w-4" />
          {link.name}
        </Link>
      ))}
    </>
  );
}