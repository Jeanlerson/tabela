
import { NextResponse } from "next/server";
import { User, fakeData } from '@/data/makeData';
/*
export async function GET(request: Request) {
    return Response.json({pong: true})
}


export async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("API handler called");
    res.status(200).json({ message: "API is working" });
}
    */


/*
let users = [...fakeData];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    if(!method) {
        res.status(400).end("No HTTP method provided");
        return;
    }

    console.log("HTTP Method:", method)

    switch(method) {
        case 'GET':
            //READ
            res.status(200).json(users)
            break;
        case 'POST':
            //CREAT
            const newUser = { ...req.body, id: users.length + 1 };
            users.push(newUser);
            res.status(201).json(newUser);
            break;
        case 'PUT':
            //UPDATE
            const updateUser = req.body as User;
            users = users.map(user => (user.id === updateUser.id ? updateUser : user));
            res.status(200).json(updateUser);
            break;
        case 'DELETE':
            //DELETE
            const { id } = req.query;
            users = users.filter(user => user.id !== Number(id));
            res.status(204).end();
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
    */

let users = [...fakeData];

export async function GET() {
    return NextResponse.json(users);
}

export async function POST(req: Request) {
    const newUser = await req.json();
    const createdUser = { ...newUser, id: users.length + 1 };
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
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    users = users.filter(user => user.id !== Number(id));
    return new NextResponse(null, { status: 204 });
}