const { PostModel } = require("../../Models/Post.model");

const PostLike = async (req, res) => {
  let id = req.params.id;
  let userid = req.body.userid;

  try {
    let like = await PostModel.findById(id);
    if (!like.likes.includes(userid)) {
      await like.updateOne({ $push: { likes: userid } });
      res.status(200).json("Post Liked");
    } else {
      await like.updateOne({ $pull: { likes: userid } });
      res.status(200).json("Post Unliked");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { PostLike };
