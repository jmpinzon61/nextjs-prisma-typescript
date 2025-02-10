import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

type RouteContext = {
    params: Promise<{id:string}>
}

export async function GET(request: Request, context: RouteContext) {
    const params = await context.params
    const task = await prisma.task.findFirst({
        where: {
            id: Number(params.id),
        },
    });
    return NextResponse.json(task);
}

export async function PUT(request: Request, context: RouteContext) {
    const params = await context.params
    const data = await request.json();
    const taskUpdate = await prisma.task.update({
        where: {
            id: Number(params.id),
        },
        data:data,
    });
    return NextResponse.json(taskUpdate);
}

export async function DELETE(request: Request, context: RouteContext) {
    const params = await context.params
    const task = await prisma.task.delete({
        where: {
        id: Number(params.id),
    },
    });
    return NextResponse.json(task)
}

