import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectDB } from "@/config/dbConfig";
import bcrypt from 'bcryptjs';

export async function POST(request: { json: () => any; }) {
    try {
        const reqBody = await request.json();

        // Check if the user already exists
        const userExists = await User.findOne({ email: reqBody.email });

        if (userExists) {
            throw new Error("User already exists");
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(reqBody.password, salt);

        reqBody.password = hashedPassword;

        // create the user
        await User.create(reqBody);

        return NextResponse.json({ 
            message: "User created successfully"
         },  
         { 
            status: 201 
        });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 400 })
    }
}