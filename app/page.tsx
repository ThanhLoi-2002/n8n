'use client'
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "./trpc/server";
import LogoutButton from "./logout";
import { useTRPC } from "./trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

const Page = async () => {
  // await requireAuth();
  const trpc = useTRPC();
  const queryClient = useQueryClient()
  const {data} = useQuery(trpc.getWorkflows.queryOptions())

  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      queryClient.invalidateQueries(trpc.getWorkflows.queryOptions())
    }
  }))
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      Protected server component
      {
        JSON.stringify(data, null, 2)
      }
      <Button disabled={create.isPending} onClick={() => create.mutate()}>Create Workflow</Button>
      <LogoutButton/>
    </div>
  );
};

export default Page;
