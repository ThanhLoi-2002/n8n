import { inngest } from "@/app/inngest/client";
import { excute } from "@/app/inngest/function";
import { serve } from "inngest/next";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    excute
  ],
});