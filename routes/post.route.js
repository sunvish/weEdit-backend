import express from "express";
import { createPost, getPost } from "../controllers/post.controller.js";

const postRouter = express.Router();

postRouter.get("/postwork", getPost);

postRouter.post("/postwork", createPost);

export default postRouter;
