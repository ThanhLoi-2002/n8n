import { authClient } from "@/lib/auth-client"
import { useQuery } from "@tanstack/react-query"

const useSubscription = () => {
    return useQuery({
        queryKey: ['subscripiton'],
        queryFn: async () => {
            const { data } = await authClient.customer.state()
            return data
        }
    })
}

export const useHasActiveSubscription = 
() => {
    const {data: customerState, isLoading, ...rest} = useSubscription()
    const hasActiveSubsciption = customerState?.activeSubscriptions && customerState?.activeSubscriptions.length > 0 
    return {
        isLoading,
        hasActiveSubsciption
    }
}