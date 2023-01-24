const { PostModel } = require("../../Models/Post.model");

const UpdatePost = async (req, res) => {
  let id = req.params.id;
  const { userid } = req.body;
  try {
    const Postid = await PostModel.findById(id);
    if (Postid.userId === userid) {
      let UpdatedItem = await PostModel.updateOne({ $set: req.body });
      res.send({ message: "Post Updated", UpdatedItem });
    } else {
      res.send("You can't make change in this post");
    }
  } catch (error) {
    res.send({ message: "error" });
  }
};

module.exports = { UpdatePost };
