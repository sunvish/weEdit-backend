import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  try {
    const { Title, Description, Price, Link } = req.body;

    const newPost = await Post.create({ Title, Description, Price, Link });
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.find({});
    res.status(200).json(post);
  } catch (error) {
    console.log(error.message);
  }
};
