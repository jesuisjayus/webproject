import express from "express";
import { verifyToken } from "../verifyToken.js";
import { createPost, deletePost, getPost, getTimeline, getAllPosts} from "../controllers/post.js";

const router = express.Router();

router.post('/', verifyToken, createPost);
router.delete('/delete/:id', verifyToken, deletePost);
router.get('/timeline', getTimeline);
router.get('/user/all/:id', getAllPosts);
router.get('/:id', getPost);



export default router;