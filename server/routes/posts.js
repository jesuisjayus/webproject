import express from "express";
import { verifyToken } from "../verifyToken.js";
import { createPost } from "../controllers/post.js";

const router = express.Router();

router.post('/', verifyToken, createPost);

export default router;