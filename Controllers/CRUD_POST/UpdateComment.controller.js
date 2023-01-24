const { PostModel } = require("../../Models/Post.model");

const UpdateComment = async (req, res) => {
  let postid = req.params.id;
  let { comment, id } = req.body;
  try {
    const Post = await PostModel.findById(postid);
    await Post.comment.findByIdAndUpdate(id, { comment });
    res.send({ message: "Comment Updated" });
  } catch (error) {
    req.send({ message: error });
  }
};

module.exports = { UpdateComment };
