import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
import authEditorRouter from "./routes/auth.editor.route.js";
import cors from "cors";
import postRouter from "./routes/post.route.js"

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api", authEditorRouter);
app.use("/api",postRouter)

mongoose
  .connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT, () => {
      console.log("port connected");
    })
  )
  .catch((err) => {
    console.log(err);
  });
