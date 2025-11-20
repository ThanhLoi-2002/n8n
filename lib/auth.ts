import { polarClient } from './polar';
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
    },
    plugins: [
        polar({
            client: polarClient,
            createCustomerOnSignUp: true,
            use: [
                checkout({
                    products: [
                        {
                            productId: "861d06e5-78c9-49cb-ba7b-43c1e8910df9",
                            slug: "pro"
                        }
                    ],
                    successUrl: process.env.POLAR_SUCCESS_URL,
                    authenticatedUsersOnly: true
                }),
                portal()
            ]
        })
    ]
});