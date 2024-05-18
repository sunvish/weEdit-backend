import express from "express";
const authEditorRouter = express.Router();
import {
  registerEditor,
  loginEditor,
} from "../controllers/editor.controller.js";

authEditorRouter.post("/register", registerEditor);
authEditorRouter.post("/login", loginEditor);

export default authEditorRouter;
