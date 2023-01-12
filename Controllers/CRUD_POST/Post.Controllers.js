const { PostModel } = require("../../Models/Post.model");

const CreatePost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json("Post Saved");
  } catch (error) {
    res.send({ message: error.message });
  }
};
