const { PostModel } = require("../../Models/Post.model");

const UpdatePost = async (req, res) => {
  let id = req.params.id;
  const { userid } = req.body;
  try {
    const Postid = await PostModel.findById(id);
    if (Postid.userId === userid) {
      await PostModel.findByIdAndUpdate(id, req.body);
      let findbyUpdatedId = await PostModel.findById(id);
      res.send({ message: "Post Updated", post: findbyUpdatedId });
    } else {
      res.send("You can't make change in this post");
    }
  } catch (error) {
    res.send({ message: error });
  }
};

module.exports = { UpdatePost };
