"use client";

import { AppSidebar } from "@/components/layouts/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useMe } from "@/features/auth/hooks/use-me";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = useMe();
  const initial = user?.name ? user.name[0].toUpperCase() : "?";

  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex-1 px-2 py-2 space-y-4">
        <div
          className="
        p-2 border ring-1 ring-foreground/10 bg-card rounded-lg 
        flex flex-row items-center justify-between"
        >
          <SidebarTrigger />

          <div className="flex flex-row space-x-2 items-center">
            <div className="rounded-full bg-sky-400 aspect-square w-8 text-xs text-primary font-bold flex items-center justify-center">
              {initial}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xs">
                {user?.name || "Memuat..."}
              </span>
              <span className="text-muted-foreground text-xs">
                {user?.username}
              </span>
            </div>
          </div>
        </div>

        {children}
      </main>
    </SidebarProvider>
  );
}
