import { AppSidebar } from "@/components/layouts/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex-1 px-2 py-2 space-y-2">
        <div
          className="
        p-2 border ring-1 ring-foreground/10 bg-card rounded-lg 
        flex flex-row items-center justify-between"
        >
          <SidebarTrigger />

          <div className="flex flex-row space-x-2">
            <div className="rounded-full bg-sky-400 aspect-square w-8 text-xs text-primary flex items-center justify-center">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xs">Stephen Helenus</span>
              <span className="text-muted-foreground text-xs">
                stephenhelk@gmail.com
              </span>
            </div>
          </div>
        </div>

        {children}
      </main>
    </SidebarProvider>
  );
}
