"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationLinks } from "@/lib/navigation-data";

interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: JSX.Element;
}

export function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  // 获取当前路径的完整导航信息
  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      {
        label: "首页",
        href: "/",
        icon: <Home className="h-4 w-4" />
      }
    ];

    let currentPath = "";
    paths.forEach((path) => {
      currentPath += `/${path}`;
      const navItem = navigationLinks.find(
        (item) => item.href === currentPath
      );
      if (navItem) {
        items.push({
          label: navItem.label,
          href: currentPath
        });
      }
    });

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-500">
      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
          )}
          {index === breadcrumbItems.length - 1 ? (
            <span className="text-secondary font-medium">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="flex items-center hover:text-primary transition-colors"
            >
              {item.icon || item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
} 