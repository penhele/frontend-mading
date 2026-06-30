"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMe } from "@/features/auth/hooks/use-me";
import { cn } from "@/lib/utils";
import { Home, LayoutDashboard, LogIn, BookOpen } from "lucide-react";

export default function FloatingNavbar() {
  const pathname = usePathname();
  const { data: user } = useMe();

  const navItems = [
    {
      label: "Beranda",
      href: "/",
      icon: Home,
      active: pathname === "/",
    },
    ...(user
      ? [
          {
            label: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
            active: pathname.startsWith("/dashboard"),
          },
        ]
      : [
          {
            label: "Login",
            href: "/login",
            icon: LogIn,
            active: pathname === "/login",
          },
        ]),
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-4 px-4 py-2 rounded-full border border-border/40 bg-background/60 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-border/80">
        <Link href="/" className="flex items-center gap-2 pl-2">
          <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-sm">
            D
          </div>
          <span className="font-extrabold text-sm tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            DeSiWeM
          </span>
        </Link>

        <div className="flex items-center gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200",
                  item.active
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <Icon className="size-3.5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
