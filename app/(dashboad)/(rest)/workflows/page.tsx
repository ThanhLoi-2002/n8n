import WorkflowList, {
  WorkflowsContainer,
} from "@/app/features/workflows/components/workflows";
import { prefetchWorkflows } from "@/app/features/workflows/server/prefetch";
import { HydrateClient } from "@/app/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Page = () => {
  prefetchWorkflows();
  return (
    <WorkflowsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<p>Error</p>}>
          <Suspense fallback={<p>Loading...</p>}>
            <WorkflowList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </WorkflowsContainer>
  );
};

export default Page;
