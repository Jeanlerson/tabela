import mongoose from 'mongoose';

const connectDB = async () => {
    if(mongoose.connections[0].readyState) {
        return true;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI as string)
        console.log('MONGODB Conectado')

        return true
    } catch(error) {
        console.log(error)
    }
}

export default connectDB;

/*
const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
    throw new Error('Defina a variável MONGODB_URI no arquivo .env');
}

let isConnected = false;

export async function connectToDatabase() {
    if (isConnected) return;

    try {
        await mongoose.connect(MONGODB_URI);
        isConnected = true;
        console.log('Conectado ao MongoDB');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
}
*/