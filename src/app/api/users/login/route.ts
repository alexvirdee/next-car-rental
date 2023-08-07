import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectDB } from "@/config/dbConfig";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

connectDB();

export async function POST(request: { json: () => any; }) {

    const tokenEnv = process.env.jwt_secret as string; 
    
    try {
        const reqBody = await request.json();

        // check if user exists
        const user = await User.findOne({ email: reqBody.email });

        if (!user) {
            throw new Error("User not found");
        }

        // check if the password is correct
        const validPassword = await bcrypt.compare(reqBody.password, user.password);

        if (!validPassword) {
            throw new Error("Invalid password");
        }

        const response = NextResponse.json({
            message: 'Login successful',
        });

        // create token
        const token = jwt.sign({ _id: user._id },  tokenEnv, {
            expiresIn: "1d"
        })

        // Set cookie
        response.cookies.set("token", token, {
            path: '/',
            httpOnly: true
        });

        return response;

    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 400 })
    }
}