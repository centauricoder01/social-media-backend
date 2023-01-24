const { PostModel } = require("../../Models/Post.model");

const UpdatePost = async (req, res) => {
  let id = req.params.id;
  const { userid } = req.body;
  try {
    const Postid = await PostModel.findById(id);
    if (Postid.userId === userid) {
      await PostModel.updateOne({ $set: req.body });
      res.status(200).json("Post Updated");
    } else {
      res.status(403).json("You can't make change in this post");
    }
  } catch (error) {
    res.send({ message: "error" });
  }
};

module.exports = { UpdatePost };
