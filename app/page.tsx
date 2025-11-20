"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/workflows");
  }, []);

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6"></div>
  );
};

export default Page;
