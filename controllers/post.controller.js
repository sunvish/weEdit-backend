import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  try {
    const { Title, Description, Price, Link } = req.body;
    const editorId = req.editorId;
    console.log(req.body);
    console.log(editorId);

    const newPost = await Post.create({
      Title,
      Description,
      Price,
      Link,
      editorId,
    });
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPosts = async (req, res) => {
  try {
    const editorId = req.editorId;
    const posts = await Post.find({ editorId });
    res.status(200).json({ posts });
  } catch (error) {
    console.log(error.message);
  }
};

export const editPosts = async (req, res) => {
  try {
    const editorId = req.editorId;
    const postId = req.params;

    const posts = await Post.findOneAndUpdate(
      { editorId, postId },
      ...req.body,
      { new: true }
    );
    res.status(200).json({ updated: posts });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePosts = async (req, res) => {
  try {
    const editorId = req.editorId;
    const { postId } = req.params;
    console.log(editorId, postId);

    const posts = await Post.findOneAndDelete({ _id: postId, editorId });
    res.status(200).json({ deleted: posts });
  } catch (error) {
    console.log(error.message);
  }
};
