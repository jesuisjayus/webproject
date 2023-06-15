import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
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
        profilePicture: {
            type: String
        },
        followers: {
            type: Array,
            defaultValue: []
        },
        following: {
            type: Array,
            defaultValue: []
        },
        description: {
            type: String
        },
        birthDate: {
            type: String,
            defaultValue: ""
        },
        iDo: {
            type: String,
            defaultValue: ""
        },
        iWant: {
            type: String,
            defaultValue: ""
        },
        access_token: {
            type: String,
            unique: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);
