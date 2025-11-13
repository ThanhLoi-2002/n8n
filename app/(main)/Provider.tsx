"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { FC, ReactNode, useEffect } from "react";
import { AppSidebar } from "./_components/AppSidebar";
import AppHeader from "./_components/AppHeader";
import { useAuthContext } from "../provider";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
}

const DashboardProvider: FC<Props> = ({ children }) => {
  const user = useAuthContext();
  const router = useRouter();

  const checkedUserAuthenticated = () => {
    if (!user) {
      router.replace("/");
    }
  };
  useEffect(() => {
    user && checkedUserAuthenticated();
  }, []);
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <AppHeader />
        <div className="p-10">{children}</div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardProvider;
