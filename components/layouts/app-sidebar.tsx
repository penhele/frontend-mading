"use client";

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
import { useRouter } from "next/navigation";

export function AppSidebar() {
  const navItems = [
    {
      label: "Dashboard",
      Icon: LayoutDashboard,
      route: ROUTES.DASHBOARD,
    },
  ];

  const router = useRouter();

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navItems.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton onClick={()=> router.push(item.route)}>
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
