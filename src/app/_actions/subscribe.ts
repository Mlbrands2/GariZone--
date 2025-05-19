"use client"
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { CustomerStatus } from "../../../prisma/src/generated/prisma";
//import { PrismaClientKnownRequestError, PrismaClientValidationError } from "../../../prisma/src/generated/prisma/runtime/library";

const subscribeSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().min(1, { message: "Invalid email address" }),
});

export const subscribeAction = async (_: any, formData: FormData) => {
    try {
        const { data, success, error } = subscribeSchema.safeParse({
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
            email: formData.get("email") as string,
        });

        if (!success) {
            const errorMessage = error.issues.map((issue) => issue.message).join(", ");
            return { success: false, message: errorMessage };
        }

        const subscriber = await prisma.customer.findFirst({
            where: { email: data.email },
        });

        if (subscriber) {
            return { success: false, message: "You are already subscribed" };
        }

        await prisma.customer.create({
            data: {
                ...data,
                status: CustomerStatus.SUBSCRIBER,
            },
        });

        return { success: true, message: "Subscribed successfully!" };

    } catch (error) {
        // if (error instanceof PrismaClientKnownRequestError) {
        //     return { success: false, message: error.message };
        // }
        // if (error instanceof PrismaClientValidationError) {
        //     return { success: false, message: error.message };
        // }
        if (error instanceof Error) {
            return { success: false, message: "Something went wrong" };
        }
    }
};
