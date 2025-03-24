"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationLinks } from "@/lib/navigation-data";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navbarClasses = cn(
    "fixed w-full top-0 z-50 transition-all duration-300",
    scrolled
      ? "bg-white shadow-md py-2"
      : "bg-white shadow-sm py-3"
  );

  const linkTextClasses = cn(
    "transition-colors",
    "text-secondary"
  );

  return (
    <header className={navbarClasses}>
      <div className="container-wide flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold">
          <span className="transition-colors text-primary">
            聆花
          </span>
          <span className={linkTextClasses}>文化</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  {link.subItems ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          "font-medium",
                          pathname === link.href ? "text-primary" : "text-secondary !important"
                        )}
                      >
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {link.href === '/art-origins' ? (
                            <>
                              <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={link.href}
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-secondary/50 to-secondary p-6 no-underline outline-none focus:shadow-md"
                                  >
                                    <div className="mt-4 mb-2 text-lg font-medium text-white">
                                      掐丝珐琅艺术起源
                                    </div>
                                    <p className="text-sm leading-tight text-white/80">
                                      探索源自东方的珐琅艺术之美，感受千年工艺的传承与创新
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="/art-origins/history"
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">掐丝珐琅艺术历史</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      探索景泰蓝工艺的六百年历史与文化意义
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="/art-origins/contemporary"
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">当代掐丝珐琅</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      传统工艺的现代演绎与创新发展
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            </>
                          ) : (
                            link.subItems?.map((subItem) => (
                              <li key={subItem.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">{subItem.label}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {subItem.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))
                          )}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-medium",
                        pathname === link.href ? "text-primary" : "text-secondary !important"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
          aria-label={isOpen ? "关闭菜单" : "打开菜单"}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-secondary" />
          ) : (
            <Menu className="h-6 w-6 text-secondary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white"
          >
            <div className="container py-4">
              <nav className="flex flex-col space-y-4">
                {navigationLinks.map((link) => (
                  <div key={link.href} className="py-2">
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-secondary hover:text-primary"
                    >
                      {link.label}
                    </Link>
                    {link.subItems && (
                      <div className="mt-2 ml-4 flex flex-col space-y-2">
                        {link.href === '/art-origins' ? (
                          <>
                            <Link
                              href="/art-origins/history"
                              className="text-sm text-gray-600 hover:text-primary"
                            >
                              掐丝珐琅艺术历史
                            </Link>
                            <Link
                              href="/art-origins/contemporary"
                              className="text-sm text-gray-600 hover:text-primary"
                            >
                              当代掐丝珐琅
                            </Link>
                          </>
                        ) : (
                          link.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="text-sm text-gray-600 hover:text-primary"
                            >
                              {subItem.label}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
