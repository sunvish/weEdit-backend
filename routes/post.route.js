import express from "express";
import {
  createPost,
  deletePosts,
  editPosts,
  getPosts,
} from "../controllers/post.controller.js";
import { verifyToken } from "../verifyToken.js";

const postRouter = express.Router();

postRouter.get("/postwork", verifyToken, getPosts);

postRouter.post("/postwork", verifyToken, createPost);
postRouter.put("/postwork/:id", verifyToken, editPosts);
postRouter.delete("/postwork/:id", verifyToken, deletePosts);

export default postRouter;
