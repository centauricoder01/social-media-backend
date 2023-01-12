const { PostModel } = require("../../Models/Post.model");

const CreatePost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    let postData = await newPost.save();
    res.send({ message: "Post Saved", postData });
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = { CreatePost };
