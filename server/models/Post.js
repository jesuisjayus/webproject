import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        userId: { 
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true,
            max: 280
        },
        description: {
            type: String,
            required: true,
            max: 1000
        },
        category: {
            type: String,
            required: true
        },
        likes: {
            type: Array,
            defaultValue: []
        },
    },
    { timestamps: true }
);

export default mongoose.model("Post", PostSchema);