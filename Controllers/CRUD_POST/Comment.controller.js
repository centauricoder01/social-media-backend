const { PostModel } = require("../../Models/Post.model");

const CommentPost = async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  try {
    const Post = await PostModel.findById(id);
    if (Post) {
      await Post.updateOne({ $push: { comment: data } });
      res.send("Comment Added");
    } else {
      res.send("Post Not Found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { CommentPost };
