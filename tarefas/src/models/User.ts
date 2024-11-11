// models/User.ts
import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    tarefa: { 
        type: String, 
        required: true 
    },
    custo: { 
        type: Number, 
        required: true 
    },
    datalimite: { 
        type: Date, 
        required: true 
    },
}, { timestamps: true });

const User = models.User || model("User", userSchema);
export default User;
