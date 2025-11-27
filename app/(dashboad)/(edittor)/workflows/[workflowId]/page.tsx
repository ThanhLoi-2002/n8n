import {
  Editor,
  EditorError,
  EditorLoading,
} from "@/app/features/editor/components/editor";
import EditorHeader from "@/app/features/editor/components/editor-header";
import { prefetchWorkflow } from "@/app/features/workflows/server/prefetch";
import { HydrateClient } from "@/app/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface Props {
  params: Promise<{ workflowId: string }>;
}

const Page = async ({ params }: Props) => {
  const { workflowId } = await params;
  prefetchWorkflow(workflowId);

  return (
    <HydrateClient>
      <ErrorBoundary fallback={<EditorError />}>
        <Suspense fallback={<EditorLoading />}>
          <EditorHeader workflowId={workflowId} />
          <main className="flex-1">
            <Editor workflowId={workflowId} />
          </main>
        </Suspense>
      </ErrorBoundary>{" "}
    </HydrateClient>
  );
};

export default Page;
