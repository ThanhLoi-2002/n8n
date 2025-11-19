import { inngest } from '@/app/inngest/client';
import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';

export const appRouter = createTRPCRouter({
  testAI: baseProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai"
    })
    
    return {success: true, message: "Job queued"}
  }),
  getWorkflows: protectedProcedure
    .query(({ ctx }) => {
      return prisma.user.findMany();
    }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: 'test/hello.world',
      data: {
        email: 'doanthanhloi.0003@gmail.com'
      }
    })

    return {
      susscess: true, message: 'Job queued'
    }
  })
});
// export type definition of API
export type AppRouter = typeof appRouter;