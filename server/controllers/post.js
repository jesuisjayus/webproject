import Post from "../models/Post.js";
import { handleError } from "../error.js";
import User from "../models/User.js";


export const createPost = async (req, res, next) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        next(handleError(500, err));
    }
};

export const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("Post deleted successfully");
        } else {
            next(handleError(500, "You are not authorized to delete this post"));
        }
    } catch(err){
        next(handleError(500, err));
    }
};

export const getPost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        next(handleError(500, err));
    }
};

export const getTimeline = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        next(handleError(500, err));
    }
};

// get all the posts from one user
export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({userId: req.params.id});
        res.status(200).json(posts);
    } catch (err) {
        next(handleError(500, err));
    }
};

