import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma"
import prisma from '@/lib/db';
import { checkout, polar, portal } from '@polar-sh/better-auth'

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql'
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: true
    }
});