import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
    id: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
    const id = params.id;
    const task = await prisma.task.findFirst({
        where: {
            id: Number(id),
        },
    });
    return NextResponse.json(task);
}

export async function PUT(request: Request, { params }: { params: Params }) {
    const id = params.id;
    const data = await request.json();
    const taskUpdate = await prisma.task.update({
        where: {
            id: Number(id),
        },
        data: data,
    });
    return NextResponse.json(taskUpdate);
}

export async function DELETE(request: Request, { params }: { params: Params }) {
    const id = params.id;
    const task = await prisma.task.delete({
        where: {
            id: Number(id),
        },
    });
    return NextResponse.json(task);
}