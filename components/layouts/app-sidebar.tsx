import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ROUTES } from "@/contants/routes";
import { LayoutDashboard } from "lucide-react";

export function AppSidebar() {
  const navItems = [
    {
      label: "Dashboard",
      Icon: LayoutDashboard,
      route: ROUTES.DASHBOARD,
    },
  ];

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navItems.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton>
                  <item.Icon />
                  {item.label}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
