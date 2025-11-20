import { UpgradeModal } from '../components/upgrade-modal'; // Importing the component
import { TRPCClientError } from "@trpc/client";
import { useState } from "react";

export const useUpgradeModal = () => {
    const [open, setOpen] = useState(false);

    const handleError = (error: any) => {
        if (error instanceof TRPCClientError) {
            if (error.data?.code === 'FORBIDDEN') {
                setOpen(true);
                return true;
            }
        }
        return false;
    };

    const modal = <UpgradeModal open={open} onOpenChange={setOpen} />; // This is fine

    return {
        handleError,
        modal // Return modal if you need it used elsewhere
    };
};