const { PostModel } = require("../../Models/Post.model");

const UpdateComment = async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  try {
    const Post = await PostModel.findById(id);
    let updateComment = (Post.comment.comment = data);
    PostModel.findByIdAndUpdate(id, updateComment);
    res.send("Every thing is working fine.");
  } catch (error) {
    req.send({ message: error });
  }
};

module.exports = { UpdateComment };
