import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
    params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
    const { id } = await params;
    const task = await prisma.task.findFirst({
        where: {
            id: Number(id),
        },
    });
    return NextResponse.json(task);
}

export async function PUT(request: Request, { params }: Params) {
    const data = await request.json();
    const { id } = await params;
    const taskUpdate = await prisma.task.update({
        where: {
            id: Number(id),
        },
        data:data,
    });
    return NextResponse.json(taskUpdate);
}

export async function DELETE(request: Request, { params }: Params) {
    const { id } = await params;
    const task = await prisma.task.delete({
        where: {
        id: Number(id),
    },
    });
    return NextResponse.json(task)
}

