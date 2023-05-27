import Post from "../models/Post.js";
import { handleError } from "../error.js";


export const createPost = async (req, res, next) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        next(handleError(500, err));
    }
};

