import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Link: {
      type: String,
      required: true,
    },
    editorId : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "editor"
    }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
