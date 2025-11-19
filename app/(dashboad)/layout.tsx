
import AppSideBar from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { requireAuth } from "@/lib/auth-utils";
import { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  await requireAuth();
  return (
    <SidebarProvider>
        <AppSideBar/>
      <SidebarInset className="bg-accent/20">{children}</SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
