"use server";

import { prisma } from "@/utils/prisma";

export async function newTask(description: string) {
    try {
        if (!description)
            return;

        const newTask = await prisma.tasks.create({
            data: {
                description: description,
                is_done: false
            }
        });

        if (!newTask)
            return;

        return newTask;
    }
    catch(error) {
        throw error;
    }
}