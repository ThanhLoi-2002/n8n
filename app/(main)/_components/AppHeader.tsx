"use client";
import { useAuthContext } from "@/app/provider";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";

const AppHeader = () => {
  const user: any = useAuthContext();
  return (
    <div className="p-3 flex justify-between items-center">
      <SidebarTrigger />
      <Image src={user?.pictureURL}
        alt=""
        width={40}
        height={40}
        className="rounded-full"
      />
    </div>
  );
};

export default AppHeader;
