//'use server'
import { NextResponse } from "next/server";
import { Data, fakeData } from '@/data/makeData';
let data = [...fakeData];

export async function GET() {
    return NextResponse.json(data);
}

export async function POST(req: Request) {
    const newUser = await req.json();
    const createdUser = { ...newUser, id: data.length ? Math.max(...data.map(data => data.id)) + 1 : 1 };
    data.push(createdUser);
    return NextResponse.json(createdUser, { status: 201 });
}

export async function PUT(req: Request) {
    const updateUser = await req.json() as Data;
    data = data.map(data => (data.id === updateUser.id ? updateUser : data));
    return NextResponse.json(updateUser);
}

export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    console.log("Deleting user with id:", id);

    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    data = data.filter(data => data.id !== Number(id));
    console.log("Remaining users after deletion:", data);
    return new NextResponse(null, { status: 204 });
}