const { PostModel } = require("../../Models/Post.model");

const DeletePost = async (req, res) => {
  const { id } = req.params;
  const { userid } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (post.userId === userid) {
      await post.deleteOne();
      res.status(200).json("Post Deleted");
    } else {
      res.status(403).json("You can't delete this Post");
    }
  } catch (error) {
    res.send({ message: "error" });
  }
};

module.exports = { DeletePost };
