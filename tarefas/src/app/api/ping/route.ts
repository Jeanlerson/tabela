//'use server'
import { NextResponse } from "next/server";
import { User, fakeData } from '@/data/makeData';
let users = [...fakeData];

export async function GET() {
    return NextResponse.json(users);
}

export async function POST(req: Request) {
    const newUser = await req.json();
    const createdUser = { ...newUser, id: users.length ? Math.max(...users.map(user => user.id)) + 1 : 1 };
    users.push(createdUser);
    return NextResponse.json(createdUser, { status: 201 });
}

export async function PUT(req: Request) {
    const updateUser = await req.json() as User;
    users = users.map(user => (user.id === updateUser.id ? updateUser : user));
    return NextResponse.json(updateUser);
}

export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    console.log("Deleting user with id:", id);

    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    users = users.filter(user => user.id !== Number(id));
    console.log("Remaining users after deletion:", users);
    return new NextResponse(null, { status: 204 });
}

    
/*
const uri = process.env.MONGODB_URI

mongoose.connect(uri as string)
.then(() => {
    console.log("Banco de dados conectadado")
})
.catch(() => {
    console.log("Não funcionou")
})
    */