"use client";

import LogoutButton from "./logout";
import { useTRPC } from "./trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Page = () => {
  const trpc = useTRPC();
  const router = useRouter()
  // const {data} = useQuery(trpc.getWorkflows.queryOptions())

  // const create = useMutation(trpc.createWorkflow.mutationOptions({
  //   onSuccess: () => {
  //     toast.success("job queued")
  //   }
  // }))
  const testAi = useMutation(
    trpc.testAI.mutationOptions({
      onSuccess: () => {
        toast.success("job queued");
      },
      onError: () => {
      toast.error("some thing went wrong")
    }
    })
  );

  router.push('/workflows')
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      Protected server component
      {/* {
        JSON.stringify(data, null, 2)
      }
      <Button disabled={create.isPending} onClick={() => create.mutate()}>Create Workflow</Button> */}
      <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>
        Test AI
      </Button>
      <LogoutButton />
    </div>
  );
};

export default Page;
