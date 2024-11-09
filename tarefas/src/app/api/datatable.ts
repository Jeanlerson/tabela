
import type { NextApiRequest, NextApiResponse } from "next";
import { User, fakeData } from '@/data/makeData';

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({name: 'Jean'})
}

/*
let users = [...fakeData];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

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