import mongoose from 'mongoose';

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL as string)

        console.log('MongoDB Connection Successful')
    } catch (error) {
        console.log(error)
    }
}