"use client"
import { useTRPC } from '@/app/trpc/client'
import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

const Page = () => {
    const trpc = useTRPC()
    const testAI = useMutation(trpc.testAI.mutationOptions({
        onSuccess: () => {
            toast.success('Success')
        },
        onError: ({message}) => {
            toast.error(message)
        }
    }))
  return (
    <Button onClick={() => testAI.mutate()}>Click to test subcription</Button>
  )
}

export default Page