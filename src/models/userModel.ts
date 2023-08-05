import mongoose, { Schema } from "mongoose";

interface IUser {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isActive: boolean;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Check if user model is already created
if (mongoose.models.users) {
    const userModel = mongoose.model('users');

    mongoose.deleteModel(userModel.modelName);
}

const User = mongoose.model("users", userSchema);

export default User;